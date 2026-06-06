"use client";

import { useState } from "react";
import { TTextFieldProps } from "./def/T_text_field";

export default function CustomTextField({
    label,
    type = "text",
    placeholder,
    error,
    value,
    onChange,
}: TTextFieldProps) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-text">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full px-4 py-2.5 rounded-xl border bg-white outline-none transition-all duration-200 placeholder:text-text-secondary/50 ${error
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
                    : focused
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-text/20"
                    }`}
            />
            {error && (
                <p className="text-xs text-error mt-1">{error}</p>
            )}
        </div>
    );
}
