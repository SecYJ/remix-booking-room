import { IoMdResize } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdKingBed } from "react-icons/md";

interface Props {
    data: [string, string, string];
}

const BaseDataGrid = ({ data }: Props) => {
    return (
        <ul className="flex gap-4">
            {data.map((item, index) => (
                <li
                    key={item}
                    className="grid size-24 content-between rounded-lg border border-primary-40 bg-white px-4 py-5"
                >
                    {index === 0 && (
                        <IoMdResize className="size-6 rounded bg-primary-100 p-1 text-white" />
                    )}
                    {index === 1 && (
                        <MdKingBed className="size-6 rounded bg-primary-100 p-1 text-white" />
                    )}
                    {index === 2 && (
                        <IoPersonSharp className="size-6 rounded bg-primary-100 p-1 text-white" />
                    )}
                    <div className="font-bold text-neutral-80">{item}</div>
                </li>
            ))}
        </ul>
    );
};

export default BaseDataGrid;
