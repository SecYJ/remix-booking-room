import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

interface Props {
    onClick: () => void;
    orientation: "back" | "forward";
}

const CarouselButton = ({ onClick, orientation }: Props) => {
    return (
        <button
            type="button"
            className="grid size-14 place-items-center rounded-full bg-white"
            onClick={() => onClick()}
        >
            {orientation === "back" && (
                <IoChevronBackSharp className="size-6 text-neutral-80" />
            )}
            {orientation === "forward" && (
                <IoChevronForwardSharp className="size-6 text-neutral-80" />
            )}
        </button>
    );
};

export default CarouselButton;
