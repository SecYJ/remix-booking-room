import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import chevronLeftIcon from "public/assets/chevronLeft.svg";
import chevronRightIcon from "public/assets/chevronRight.svg";
import desktopBg from "public/assets/desktop/bg.png";
import mobileBg from "public/assets/mobile/bg.png";
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
        Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: false }),
    ]);

    useEffect(() => {
        if (!embla) return;

        embla.on("select", (e) => setSelectedIndex(e.selectedScrollSnap()));
    }, [embla]);

    return (
        <section className="relative pb-[100px] pt-[200px]">
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

            <div className="container font-bold">
                <div className="relative mb-6">
                    <h2 className="mb-4 text-3xl">尊爵雙人房</h2>
                    <p className="text-sm">
                        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                    </p>
                    <strong className="mt-8 block">NT$ 10,000</strong>
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={desktopBg}
                        />
                        <source media="(max-width: 1023px)" srcSet={mobileBg} />
                        <img
                            src={mobileBg}
                            className="absolute left-0 top-0"
                            alt="showroom banner"
                        />
                    </picture>
                </div>
                <button
                    type="button"
                    className="relative flex w-full items-center justify-end gap-4 rounded-lg bg-white p-5 text-black"
                >
                    <span>查看更多</span>
                    <span className="h-px w-20 bg-black" />
                </button>
                <div className="mt-11 flex gap-10">
                    <button type="button">
                        <img src={chevronLeftIcon} alt="chevron left" />
                    </button>
                    <button type="button">
                        <img src={chevronRightIcon} alt="chevron left" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShowroomBanner;
