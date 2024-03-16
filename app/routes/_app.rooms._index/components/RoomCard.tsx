import { IoMdResize } from "react-icons/io";
import {
    IoChevronBackSharp,
    IoChevronForwardSharp,
    IoPersonSharp,
} from "react-icons/io5";
import { MdKingBed } from "react-icons/md";
import { cn } from "utils/cn";
import { useCarousel } from "~/hooks/useCarousel";
import RightArrowIcon from "~/icons/right-arrow.svg?react";
import { RoomType } from "../data";

const RoomCard = ({ room }: { room: RoomType }) => {
    const { selectedIndex, scrollTo, ref, onNextChange, onPrevChange } =
        useCarousel({ options: { loop: true } });

    return (
        <figure className="overflow-hidden rounded-[1.25rem] lg:grid lg:grid-cols-[1.5fr_1fr]">
            {/* NOTE: img here */}
            <div className="relative">
                <div className="h-full overflow-hidden" ref={ref}>
                    <div className="flex h-full *:h-[200px] *:w-full *:shrink-0 lg:*:h-full">
                        {room.gallery.map((img) => (
                            <img src={img} key={img} alt={img} />
                        ))}
                    </div>
                </div>

                {/* NOTE: thumbnails */}
                <ul className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                    {room.gallery.map((_, idx) => (
                        <li key={idx}>
                            <button
                                type="button"
                                onClick={() => scrollTo(idx)}
                                className={cn(
                                    "h-1 rounded-full",
                                    selectedIndex === idx
                                        ? "w-15 bg-primary-100"
                                        : "w-8 bg-primary-40",
                                )}
                            />
                        </li>
                    ))}
                </ul>
                <div className="absolute left-6 right-6 top-1/2 hidden -translate-y-1/2 justify-between lg:flex">
                    <button
                        type="button"
                        className="grid size-14 place-items-center rounded-full bg-white"
                        onClick={onPrevChange}
                    >
                        <IoChevronBackSharp className="size-6 text-neutral-80" />
                    </button>
                    <button
                        type="button"
                        className="grid size-14 place-items-center rounded-full bg-white"
                        onClick={onNextChange}
                    >
                        <IoChevronForwardSharp className="size-6 text-neutral-80" />
                    </button>
                </div>
            </div>
            <div className="space-y-6 bg-white p-4 lg:space-y-10 lg:p-10">
                <div>
                    <figcaption className="mb-2 text-[1.75rem] font-bold text-black lg:text-[2.5rem]">
                        {room.roomName}
                    </figcaption>
                    <p className="text-sm font-medium text-neutral-80 lg:text-base">
                        {room.roomDescription}
                    </p>
                </div>
                <ul className="flex gap-4">
                    {room.features.map((feature, index) => (
                        <li
                            className="grid size-24 content-between rounded-lg border border-primary-40 px-4 py-5"
                            key={index}
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
                            <div className="font-bold text-neutral-80">
                                {feature}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="deco-line h-0.5" />
                <div className="flex justify-between">
                    <strong className="font-bold text-primary-100 lg:text-2xl">
                        NT$ {room.price}
                    </strong>
                    <button>
                        <RightArrowIcon />
                    </button>
                </div>
            </div>
        </figure>
    );
};

export default RoomCard;
