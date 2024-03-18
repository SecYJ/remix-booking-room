import { PropsWithChildren } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface Props {
    title: string;
    column?: number;
    list?: string[];
}

const RoomSection = ({
    column,
    list,
    title,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <section>
            {column}
            <h3 className="mb-4 flex items-center gap-3">
                <span className="h-6 w-1 bg-primary-100" />
                <span className="font-bold text-black">{title}</span>
            </h3>
            {children ? (
                children
            ) : (
                <ul className="rounded-lg bg-white p-6">
                    {list?.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <IoCheckmarkSharp className="size-6 text-primary-100" />
                            <p className="-mt-0.5 font-bold text-neutral-80">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default RoomSection;
