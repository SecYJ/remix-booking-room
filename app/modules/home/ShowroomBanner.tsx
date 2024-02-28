import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import chevronLeftIcon from "public/assets/chevronLeft.svg";
import chevronRightIcon from "public/assets/chevronRight.svg";
import desktopBg from "public/assets/desktop/bg.png";
import mobileBg from "public/assets/mobile/bg.png";
import decoLineMobile from "public/assets/mobile/line.png";
import decoLineDesktop from "public/assets/desktop/line2.png";
import room1 from "public/assets/mobile/room1.png";
import room2 from "public/assets/mobile/room2-1.png";
import room3 from "public/assets/mobile/room2-2.png";
import room4 from "public/assets/mobile/room2-3.png";
import room5 from "public/assets/mobile/room2-4.png";
import { cn } from "utils/cn";

const imageSlides = [room1, room2, room3, room4, room5];

const ShowroomBanner = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: true }),
    ]);

    const onSlideChange = (direction: "prev" | "next") => {
        const firstSlide = selectedIndex === 0;
        const lastSlide = selectedIndex === imageSlides.length - 1;

        if (direction === "prev") {
            const index = firstSlide
                ? imageSlides.length - 1
                : selectedIndex - 1;

            embla?.scrollTo(index);

            setSelectedIndex(index);
            return;
        }

        const index = lastSlide ? 0 : selectedIndex + 1;
        embla?.scrollTo(index);
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (!embla) return;

        embla.on("select", (e) => setSelectedIndex(e.selectedScrollSnap()));
    }, [embla]);

    return (
        <section className="container relative grid gap-6 overflow-x-hidden pb-20 pt-[200px] lg:grid-cols-2 lg:gap-20 lg:pb-[120px]">
            {/* NOTE: for mobile only */}
            <img
                className="absolute -right-20 top-24 h-20 lg:hidden"
                src={decoLineMobile}
                alt="deco line"
            />

            <div className="relative overflow-hidden" ref={emblaRef}>
                <div className="flex *:min-h-[300px] *:w-full *:shrink-0">
                    {imageSlides.map((src) => (
                        <img key={src} src={src} alt="" />
                    ))}
                </div>

                {/* dot */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {imageSlides.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            className={cn(
                                "h-1 rounded-full",
                                selectedIndex === index
                                    ? "w-15 bg-primary-100"
                                    : "w-8 bg-primary-40",
                            )}
                            onClick={() => embla?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="relative grid content-end px-3 font-bold lg:px-0">
                <img
                    src={decoLineDesktop}
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
                    <button type="button" onClick={() => onSlideChange("prev")}>
                        <img src={chevronLeftIcon} alt="chevron left" />
                    </button>
                    <button type="button" onClick={() => onSlideChange("next")}>
                        <img src={chevronRightIcon} alt="chevron left" />
                    </button>
                </div>
            </div>

            <picture className="absolute bottom-0">
                <source media="(min-width: 1024px)" srcSet={desktopBg} />
                <source media="(max-width: 1023px)" srcSet={mobileBg} />
                <img src={mobileBg} alt="showroom banner" />
            </picture>
        </section>
    );
};

export default ShowroomBanner;
