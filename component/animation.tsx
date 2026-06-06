import dynamic from "next/dynamic";
import { TAnimationProps } from "./def/T_animation";


const LottiePlayer = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false },
);


function CustomAnimation({ title, className, pathAnimation }: TAnimationProps) {
    return (<div className={`hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 relative overflow-hidden items-center justify-center m-6 rounded-xl ${className || ''}`}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.06]" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/[0.04]" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-white/[0.03]" />

        <div className="relative z-10 flex flex-col items-center w-full px-16">
            <div className="w-full max-w-sm">
                <LottiePlayer
                    autoplay
                    loop
                    src={pathAnimation || "/game.json"}
                    className="w-full"
                />
            </div>

            <div className="text-center mt-8">
                <h2 className="text-white text-3xl font-bold mb-2">
                    {title || "Join Us Today"}
                </h2>
                <p className="text-white/60 text-sm">
                    Create your account and get started
                </p>
            </div>
        </div>
    </div>);
}

export default CustomAnimation;