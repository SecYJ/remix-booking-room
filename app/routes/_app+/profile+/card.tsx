import { PropsWithChildren } from "react";

const Card = ({ title, children }: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="rounded-3xl bg-white p-6">
            <h2 className="mb-6 text-xl font-bold text-black">{title}</h2>
            {children}
        </div>
    );
};

export default Card;
