import Thumbnails from "~/components/carousel/Thumbnails";
import FeatureColumn from "~/components/room/FeatureColumn";
import { useCarousel } from "~/hooks";
import RightArrowIcon from "~/icons/right-arrow.svg?react";
import { Room } from "~/types/room";
import CarouselButton from "./CarouselButton";
import { Link } from "@remix-run/react";

const RoomCard = ({ room }: { room: Room }) => {
    const { selectedIndex, scrollTo, ref, onNextChange, onPrevChange } =
        useCarousel({ options: { loop: true } });

    return (
        <figure className="overflow-hidden rounded-[1.25rem] lg:grid lg:grid-cols-[1.5fr_1fr]">
            {/* NOTE: img here */}
            <div className="relative">
                <div className="h-full overflow-hidden" ref={ref}>
                    <div className="flex h-full *:h-[200px] *:w-full *:shrink-0 lg:*:h-full">
                        {room.imageUrlList.map((img) => (
                            <img src={img} key={img} alt={img} />
                        ))}
                    </div>
                </div>

                {/* NOTE: thumbnails */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
                    <Thumbnails
                        length={room.imageUrlList.length}
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
                        {room.name}
                    </figcaption>
                    <p className="text-sm font-medium text-neutral-80 lg:text-base">
                        {room.description}
                    </p>
                </div>

                <ul className="flex gap-4">
                    <FeatureColumn feature="areaInfo" text={room.areaInfo} />
                    <FeatureColumn feature="bedInfo" text={room.bedInfo} />
                    <FeatureColumn
                        feature="maxPeople"
                        text={room.maxPeople.toString()}
                    />
                </ul>

                <div className="deco-line h-0.5" />
                <div className="flex justify-between">
                    <strong className="font-bold text-primary-100 lg:text-2xl">
                        NT$ {room.price}
                    </strong>
                    <Link to={`/rooms/${room._id}`}>
                        <RightArrowIcon />
                    </Link>
                </div>
            </div>
        </figure>
    );
};

export default RoomCard;