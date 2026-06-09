// api.js
import axios from 'axios';
export const authConfig = {
  refreshEndpoint: '/auth/refresh',
  onSessionExpired: (error: any) => {
    console.error('Session expired!', error);
    window.location.href = '/login';
  }
};
let isRefreshing = false;
let failedQueue = [] as any;

export const api = axios.create({
  baseURL: 'https://gently-squeamish-chaffing.ngrok-free.dev/',
  withCredentials: true, // Crucial for cookie handling
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Check if error is 401 Unauthorized
    if (err.response?.status === 401 && !originalRequest._retry) {

      // Queue requests while refreshing
      if (isRefreshing) {
        return new Promise((resolve, reject) => failedQueue.push({ resolve, reject }))
          .then(() => api(originalRequest))
          .catch((e) => Promise.reject(e));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Hit the refresh endpoint using a clean axios call
        await axios.post(`${api.defaults.baseURL}${authConfig.refreshEndpoint}`, {}, { withCredentials: true });

        // Resolve queue and retry the original call
        failedQueue.forEach((q: any) => q.resolve());
        failedQueue = [];
        return api(originalRequest);
      } catch (refreshErr) {
        // Reject queue and trigger expiration function
        failedQueue.forEach((q: any) => q.reject(refreshErr));
        failedQueue = [];
        authConfig.onSessionExpired(refreshErr);
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(err);
  }
);
