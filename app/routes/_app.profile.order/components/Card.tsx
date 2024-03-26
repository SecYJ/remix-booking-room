import { PropsWithChildren } from "react";

interface Props {
    title: string;
    referenceNumber?: string;
}

const Card = ({
    children,
    title,
    referenceNumber,
}: PropsWithChildren<Props>) => {
    return (
        <figure className="rounded-lg bg-white p-4 lg:rounded-3xl lg:p-10">
            {referenceNumber && (
                <p className="mb-2 text-sm font-medium text-neutral-80">
                    預訂參考編號： {referenceNumber}
                </p>
            )}

            <figcaption className="mb-6 font-bold text-black">
                {title}
            </figcaption>
            {children}
        </figure>
    );
};

export default Card;
