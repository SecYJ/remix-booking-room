import { cloneElement } from "react";
import { IoMdResize } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdKingBed } from "react-icons/md";

interface Props {
    feature: keyof typeof FEATURES;
    text: string;
}

const FEATURES = {
    bedInfo: <MdKingBed />,
    areaInfo: <IoMdResize />,
    maxPeople: <IoPersonSharp />,
};

const FeatureColumn = ({ feature, text }: Props) => {
    return (
        <li className="grid size-24 content-between rounded-lg border border-primary-40 bg-white px-4 py-5">
            {cloneElement(FEATURES[feature], {
                className: "size-6 rounded bg-primary-100 p-1 text-white",
            })}
            <div className="whitespace-nowrap font-bold text-neutral-80">
                {text}
            </div>
        </li>
    );
};

export default FeatureColumn;
