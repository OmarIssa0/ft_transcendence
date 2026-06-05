'use client';

import TButton from "@/component/custom_button";
import CustomTextField from "@/component/custom_text_field";
import { useEffect, useRef } from "react";

function Login() {
    const signInButton = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (signInButton.current) {
            signInButton.current.focus();
        }
    }, []);


    return (
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen">

            <div className="flex items-center justify-center">
                <div className="w-[400px]">
                    <h1 className="text-4xl font-bold mb-8">
                        Sign in
                    </h1>

                    <input
                        ref={signInButton}
                        type="email"
                        placeholder="Email"
                        className="w-full border-b p-2 mb-6"
                    />

                    <CustomTextField title="Password" />

                    <TButton title="Sign in" onClick={() => { }} />
                </div>
            </div>

            <div className="flex items-center bg-blue-950 p-6 m-5 rounded-lg hidden md:block justify-center">
                <h2 className="text-white text-4xl font-bold">
                    Welcome
                </h2>
            </div>

        </div>
    );
}

export default Login;