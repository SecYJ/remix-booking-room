import { InputHTMLAttributes, forwardRef } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errormsg?: string;
}

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
    return (
        <div className="grid">
            <label htmlFor={props.label} className="text-white">
                {props.label}
            </label>
            <input
                className="mt-2 rounded-lg bg-white p-4 text-black placeholder-neutral-60"
                ref={ref}
                {...props}
            />
            <p className="text-red-400">{props.errormsg}</p>
        </div>
    );
});

Input.displayName = "Input";

export default Input;
