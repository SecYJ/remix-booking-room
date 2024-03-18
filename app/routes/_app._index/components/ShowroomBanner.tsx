import Autoplay from "embla-carousel-autoplay";
import Thumbnails from "~/components/carousel/Thumbnails";
import { useCarousel } from "~/hooks/useCarousel";
import ChevronLeftIcon from "~/icons/chevronLeft.svg?react";
import ChevronRightIcon from "~/icons/chevronRight.svg?react";

const imageSlides = [
    "/assets/mobile/room1.png",
    "/assets/mobile/room2-1.png",
    "/assets/mobile/room2-2.png",
    "/assets/mobile/room2-3.png",
    "/assets/mobile/room2-4.png",
];

const ShowroomBanner = () => {
    const { ref, selectedIndex, onNextChange, onPrevChange, scrollTo } =
        useCarousel({
            options: { loop: true },
            plugins: [
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    playOnInit: true,
                }),
            ],
        });

    return (
        <section className="container relative grid gap-6 overflow-x-hidden pb-20 pt-[200px] lg:grid-cols-2 lg:gap-20 lg:pb-30">
            {/* NOTE: for mobile only */}
            <img
                className="absolute -right-20 top-24 h-20 lg:hidden"
                src="/assets/mobile/line.png"
                alt="deco line"
            />

            <div className="relative z-10">
                <div className="overflow-hidden" ref={ref}>
                    <div className="flex *:min-h-[300px] *:w-full *:shrink-0">
                        {imageSlides.map((src) => (
                            <img key={src} src={src} alt="" />
                        ))}
                    </div>
                </div>

                {/* dot */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    <Thumbnails
                        length={imageSlides.length}
                        onSelect={(idx: number) => scrollTo(idx)}
                        selectedIndex={selectedIndex}
                    />
                </div>
            </div>

            <div className="relative z-[1] grid content-end px-3 font-bold lg:px-0">
                <img
                    src="/assets/desktop/line2.png"
                    className="absolute left-0 top-20 hidden w-[calc(100%+5rem)] -translate-x-20 lg:block"
                    alt="deco line"
                />

                <div className="relative mb-6 lg:mb-10">
                    <h2 className="mb-4 text-3xl lg:text-[2.5rem] lg:leading-none">
                        尊爵雙人房
                    </h2>
                    <p className="mb-5 text-sm font-medium lg:mb-10 lg:text-base">
                        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </p>
                    <strong className="mt-8 block text-2xl font-bold lg:text-3xl">
                        NT$ 10,000
                    </strong>
                </div>
                <button
                    type="button"
                    className="relative flex w-full items-center justify-end gap-4 rounded-lg bg-white p-5 text-black"
                >
                    <span>查看更多</span>
                    <span className="h-px w-20 bg-black" />
                </button>
                <div className="mt-11 flex justify-end gap-10">
                    <button type="button" onClick={onPrevChange}>
                        <ChevronLeftIcon />
                    </button>
                    <button type="button" onClick={onNextChange}>
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>

            <picture className="absolute bottom-0">
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/desktop/bg.png"
                />
                <source
                    media="(max-width: 1023px)"
                    srcSet="/assets/mobile/bg.png"
                />
                <img src="/assets/mobile/bg.png" alt="showroom banner" />
            </picture>
        </section>
    );
};

export default ShowroomBanner;
