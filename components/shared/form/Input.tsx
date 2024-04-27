import { InputHTMLAttributes } from "react";
import { cn } from "~/utils/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMsg?: string;
}

const Input = ({ label, errorMsg, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={label} className="text-sm font-bold">
                {label}
            </label>
            <input
                id={label}
                {...props}
                className={cn(
                    "rounded-lg border border-neutral-40 bg-white p-4 text-sm font-medium text-black placeholder-neutral-60 outline-none",
                    props.className,
                )}
            />
            <p className="text-red-600">{errorMsg}</p>
        </div>
    );
};

export default Input;
