import useEmblaCarousel from "embla-carousel-react";
import { cuisineData } from "./data";
import line from "public/assets/desktop/line.png";

const Cuisine = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <section className="lg:py-30 bg-primary-10 py-20">
            <div className="container relative">
                <img
                    className="absolute bottom-0 left-0 hidden h-full -translate-x-[5.25rem] translate-y-14 lg:block"
                    src={line}
                    alt="line"
                />
                <div className="mb-10 flex items-center gap-10 lg:mb-20">
                    <h2 className="grid grid-rows-2 text-3xl font-bold text-primary-100">
                        <span>佳餚</span>
                        <span>美饌</span>
                    </h2>
                    <div className="deco-line h-0.5 w-[200px]" />
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {cuisineData.map((cuisine) => (
                            <figure
                                className="relative w-[300px] shrink-0 overflow-hidden rounded-lg lg:w-[415px]"
                                key={cuisine.name}
                            >
                                <img src={cuisine.img} alt={cuisine.name} />
                                <div className="absolute bottom-0 grid grid-cols-[1fr_auto] items-center bg-transparent bg-gradient-to-b from-black/0 to-neutral-bg p-6">
                                    <figcaption className="text-2xl font-bold">
                                        {cuisine.name}
                                    </figcaption>
                                    <div className="flex items-center gap-2 text-sm font-bold text-neutral-40 lg:text-base">
                                        <span>{cuisine.availableDay}</span>
                                        <span>{cuisine.availableTime}</span>
                                    </div>
                                    <p className="col-span-full mt-4 text-xs font-medium lg:text-base">
                                        {cuisine.description}
                                    </p>
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cuisine;
