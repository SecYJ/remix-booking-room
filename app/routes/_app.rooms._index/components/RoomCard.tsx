import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoMdResize } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdKingBed } from "react-icons/md";
import RightArrowIcon from "~/icons/right-arrow.svg?react";
import { cn } from "utils/cn";
import { RoomType } from "../data";

const RoomCard = ({ room }: { room: RoomType }) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });
    const [selectedIdx, setSelectedIdx] = useState(0);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", (emb) => setSelectedIdx(emb.selectedScrollSnap()));
    }, [embla]);

    return (
        <figure className="overflow-hidden rounded-[1.25rem]">
            {/* NOTE: img here */}
            <div className="relative overflow-hidden" ref={emblaRef}>
                <div className="flex *:h-[200px] *:w-full *:shrink-0">
                    {room.gallery.map((img) => (
                        <img src={img} key={img} alt={img} />
                    ))}
                </div>
                {/* NOTE: thumbnails */}
                <ul className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                    {embla?.scrollSnapList().map((_, idx) => (
                        <li key={idx}>
                            <button
                                type="button"
                                onClick={() => embla?.scrollTo(idx)}
                                className={cn(
                                    "h-1 rounded-full",
                                    selectedIdx === idx
                                        ? "w-15 bg-primary-100"
                                        : "w-8 bg-primary-40",
                                )}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6 bg-white p-4">
                <div>
                    <figcaption className="text-[1.75rem] font-bold text-black">
                        {room.roomName}
                    </figcaption>
                    <p className="text-sm font-medium text-neutral-80">
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
                    <strong className="font-bold text-primary-100">
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
