import Thumbnails from "~/components/carousel/Thumbnails";
import { useCarousel } from "~/hooks";
import { rooms } from "~/routes/_app.rooms._index/data";

const temp = rooms[0].gallery.length;

const MobileGallery = () => {
    const { ref, scrollTo, selectedIndex } = useCarousel({
        options: { loop: true },
    });

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={ref}>
                <div className="flex">
                    {rooms[0].gallery.map((img, index) => (
                        <img
                            key={img}
                            src={img}
                            className="h-[240px] w-full shrink-0"
                            alt={index.toString()}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-6 left-3 flex items-end gap-4">
                <Thumbnails
                    length={temp}
                    onSelect={(idx: number) => scrollTo(idx)}
                    selectedIndex={selectedIndex}
                />
                <button
                    type="button"
                    className="rounded-lg border border-primary-100 bg-white px-8 py-4 text-primary-100"
                >
                    看更多
                </button>
            </div>
        </div>
    );
};

export default MobileGallery;
