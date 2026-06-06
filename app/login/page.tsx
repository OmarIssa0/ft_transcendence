"use client";

import CustomTextField from "@/component/custom_text_field";
import TButton from "@/component/custom_button";
import CustomAnimation from "@/component/animation";
import CustomDivider from "@/component/custom_divider";
import SignInAnther from "@/component/sign_in_anther";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      <CustomAnimation title="Welcome Back" pathAnimation="/game.json" />

      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold text-text mb-1">Sign in</h1>
          <p className="text-text-secondary mb-8 text-sm">
            Choose your preferred sign-in method
          </p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <CustomTextField label="Email" type="email" placeholder="Enter your email" />
            <CustomTextField label="Password" type="password" placeholder="Enter your password" />

            <div className="flex items-center justify-between">

              <a href="#" className="text-sm text-primary font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            <TButton title="Sign in" onClick={() => { }} />
          </form>

          <p className="text-center text-sm text-text-secondary mt-8">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-primary font-medium hover:underline">
              Register
            </a>
          </p>
          <CustomDivider />
          <SignInAnther />
        </div>
      </div>
    </div>
  );
}
