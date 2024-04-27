import Thumbnails from "~/components/carousel/Thumbnails";
import { useCarousel } from "~/hooks";
// import { rooms } from "~/routes/_app.rooms._index/data";

export const rooms = [
    {
        id: 1,
        gallery: [
            "/assets/mobile/room2-1.png",
            "/assets/mobile/room2-2.png",
            "/assets/mobile/room2-3.png",
            "/assets/mobile/room2-4.png",
            "/assets/mobile/room2-5.png",
        ],
        roomName: "尊爵雙人房",
        roomDescription:
            "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
        features: ["24坪", "1張大床", "2-4人"],
        price: 10000,
    },
    {
        id: 2,
        gallery: [
            "/assets/mobile/room3-1.png",
            "/assets/mobile/room3-2.png",
            "/assets/mobile/room3-3.png",
            "/assets/mobile/room3-4.png",
            "/assets/mobile/room3-5.png",
        ],
        roomName: "景觀雙人房",
        roomDescription:
            "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
        features: ["28坪", "1張大床", "2-4人"],
        price: 10000,
    },
    {
        id: 3,
        gallery: [
            "/assets/mobile/room4-1.png",
            "/assets/mobile/room4-2.png",
            "/assets/mobile/room4-3.png",
            "/assets/mobile/room4-4.png",
            "/assets/mobile/room4-5.png",
        ],
        roomName: "豪華雅緻房",
        roomDescription:
            "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
        features: ["36坪", "2張大床", "2-4人"],
        price: 10000,
    },
    {
        id: 4,
        gallery: [
            "/assets/mobile/room5-1.png",
            "/assets/mobile/room5-2.png",
            "/assets/mobile/room5-3.png",
            "/assets/mobile/room5-4.png",
            "/assets/mobile/room5-5.png",
        ],
        roomName: "景觀尊榮家庭房",
        roomDescription:
            "景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。",
        features: ["48坪", "2張大床", "2-4人"],
        price: 10000,
    },
];

export type RoomType = (typeof rooms)[number];

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
