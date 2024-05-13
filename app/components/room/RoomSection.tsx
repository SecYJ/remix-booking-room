import { PropsWithChildren } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface Props {
    title: string;
    list?: string[];
}

const RoomSection = ({ list, title, children }: PropsWithChildren<Props>) => {
    return (
        <section>
            <h3 className="mb-4 flex items-center gap-3">
                <span className="h-6 w-1 bg-primary-100" />
                <span className="font-bold text-black">{title}</span>
            </h3>
            {children ? (
                children
            ) : (
                <ul className="grid grid-cols-3 gap-6 rounded-lg bg-white p-6 md:grid-cols-4 lg:grid-cols-5">
                    {list?.map((item) => (
                        <li
                            key={item}
                            className="flex min-w-fit items-center gap-2"
                        >
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
