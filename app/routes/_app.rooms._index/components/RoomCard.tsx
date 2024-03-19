import Thumbnails from "~/components/carousel/Thumbnails";
import BaseDataGrid from "~/components/room/BaseDataGrid";
import { useCarousel } from "~/hooks";
import RightArrowIcon from "~/icons/right-arrow.svg?react";
import { RoomType } from "../data";
import CarouselButton from "./CarouselButton";

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
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
                    <Thumbnails
                        length={room.gallery.length}
                        onSelect={(idx: number) => scrollTo(idx)}
                        selectedIndex={selectedIndex}
                    />
                </div>
                <div className="absolute left-6 right-6 top-1/2 hidden -translate-y-1/2 justify-between lg:flex">
                    <CarouselButton orientation="back" onClick={onPrevChange} />
                    <CarouselButton
                        orientation="forward"
                        onClick={onNextChange}
                    />
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

                <BaseDataGrid
                    data={[
                        room.features[0],
                        room.features[1],
                        room.features[2],
                    ]}
                />

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
