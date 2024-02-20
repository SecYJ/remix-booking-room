import { InputHTMLAttributes } from "react";
import { cn } from "utils/cn";

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
					"text-sm outline-none text-black font-medium placeholder-neutral-60 rounded-lg bg-white p-4 border border-neutral-40",
					props.className
				)}
			/>
			<p className="text-red-600">{errorMsg}</p>
		</div>
	);
};

export default Input;
