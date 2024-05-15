import { InputHTMLAttributes } from "react";
import { cn } from "~/utils/cn";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelTextColor?: string;
    labelBold?: boolean;
    errorMsg?: string;
}

const Input = ({
    label,
    labelTextColor,
    labelBold,
    errorMsg,
    ...props
}: InputType) => {
    return (
        <div className="grid">
            <label
                htmlFor={label}
                className={cn(
                    "text-white",
                    labelTextColor,
                    labelBold && "font-bold",
                )}
            >
                {label}
            </label>
            <input
                className="mt-2 rounded-lg border border-neutral-40 bg-white p-4 text-black placeholder-neutral-60"
                {...props}
            />
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
        </div>
    );
};

Input.displayName = "Input";

export default Input;
