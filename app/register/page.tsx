"use client";

import CustomTextField from "@/component/custom_text_field";
import TButton from "@/component/custom_button";
import CustomAnimation from "@/component/animation";
import CustomDivider from "@/component/custom_divider";
import SignInAnther from "@/component/sign_in_anther";


export default function Register() {
    return (
        <div className="min-h-screen flex">
             <CustomAnimation title="Join Us Today" />

            <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6">
                <div className="w-full max-w-sm">

                    <h1 className="text-3xl font-bold text-text mb-1">
                        Create account
                    </h1>
                    <p className="text-text-secondary mb-8 text-sm">
                        Fill in your details to get started
                    </p>


                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <CustomTextField label="Name" type="text" placeholder="Enter your full name" />
                        <CustomTextField label="Email" type="email" placeholder="Enter your email" />
                        <CustomTextField label="Password" type="password" placeholder="Create a password" />

                        <TButton title="Create account" onClick={() => { }} />
                    </form>

                    <p className="text-center text-sm text-text-secondary mt-8">
                        Already have an account?{" "}
                        <a href="/login" className="text-primary font-medium hover:underline">
                            Sign in
                        </a>
                    </p>
                    <CustomDivider/>
                    {SignInAnther()}
                </div>
            </div>
        </div>
    );
}
    
