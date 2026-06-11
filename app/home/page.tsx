"use client";
import { Sidebar } from "@/component/side_bar";
import { SocialPanel } from "@/component/social_media";

export default function Home() {
    return (
        <div className="flex h-screen w-screen bg-bg-dark text-text overflow-hidden font-sans antialiased">
            <Sidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg-dark to-neon-purple/10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

                {/* Content */}
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-center space-y-6 px-6">
                        {/* Animated hexagon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-neon-purple to-neon-blue animate-glow flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959V6a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h1.5v-.374c0-1.193.967-2.163 2.163-2.163.555 0 1.076.205 1.465.571.39.366.918.571 1.465.571.555 0 1.076-.205 1.465-.571.39-.366.918-.571 1.465-.571 1.196 0 2.163.97 2.163 2.163v.374h1.5a.75.75 0 0 1 .75.75v.25ZM12 18.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Z" />
                                    </svg>
                                </div>
                                <div className="absolute -inset-4 rounded-3xl border border-primary/20 animate-pulse" />
                            </div>
                        </div>

                        <h1 className="text-5xl font-bold">
                            <span className="bg-gradient-to-r from-white via-text to-text-secondary bg-clip-text text-transparent">
                                Welcome to{" "}
                            </span>
                            <span className="bg-gradient-to-r from-neon-blue via-primary to-neon-purple bg-clip-text text-transparent">
                                GameArena
                            </span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-md mx-auto">
                            Challenge your friends, climb the leaderboard, and become the ultimate champion.
                        </p>

                        {/* Stats row */}
                        <div className="flex items-center justify-center gap-8 mt-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">1.2K</p>
                                <p className="text-xs text-text-secondary uppercase tracking-wider">Players Online</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-neon-blue">847</p>
                                <p className="text-xs text-text-secondary uppercase tracking-wider">Active Matches</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-neon-purple">156</p>
                                <p className="text-xs text-text-secondary uppercase tracking-wider">Tournaments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SocialPanel />
        </div>
    );
}
