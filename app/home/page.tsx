"use client";
import { Sidebar } from "@/component/side_bar";
import { SocialPanel } from "@/component/social_media";

export default function Home() {
    return (
        <div className="flex h-screen w-screen bg-primary text-slate-100 overflow-hidden font-sans antialiased">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 bg-primary overflow-y-auto">
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-slate-200">Welcome to GameArena!</h1>
                </div>
            </main>
            <SocialPanel />

        </div>
    );
}