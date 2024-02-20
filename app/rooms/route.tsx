import useEmblaCarousel from "embla-carousel-react";

import rightArrow from "public/assets/right-arrow.svg";
import squareMeter from "public/assets/squareMeter.svg";
import bed from "public/assets/bed.svg";
import person from "public/assets/person.svg";
import room from "public/assets/room.svg";

const RoomPage = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="bg-primary-10">
            <div className="container">
                <div>
                    <p className="mb-2 text-sm text-neutral-80">房型選擇</p>
                    <h1 className="primary-100 text-3xl">各種房型，任您挑選</h1>
                </div>

                <figure
                    className="overflow-hidden rounded-[1.25rem] bg-white"
                    ref={emblaRef}
                >
                    {/*  NOTE: toppart */}
                    {/* <div className="embla overflow-hidden" ref={emblaRef}> */}
                    <div className="embla__container flex *:min-w-0 *:shrink-0 *:basis-full">
                        <div className="embla__slide">
                            <img src={room} className="w-full" alt="" />
                        </div>
                        <div className="embla__slide">Slide 2</div>
                        <div className="embla__slide">Slide 3</div>
                    </div>
                    {/* </div> */}

                    {/* NOTE: bottom part */}
                    <div className="space-y-6 p-4">
                        <div>
                            <figcaption className="text-[1.75rem] font-bold">
                                尊爵雙人房
                            </figcaption>
                            <p className="text-sm font-medium text-neutral-80">
                                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                            </p>
                        </div>

                        <ul className="*rounded-lg *:border-primary grid grid-cols-3 gap-4 *:border *:p-4">
                            <li>
                                <img src={squareMeter} alt="square meter" />
                                <p className="mt-2 text-sm font-bold text-neutral-80">
                                    24坪
                                </p>
                            </li>
                            <li>
                                <img src={bed} alt="bed" />
                                <p className="mt-2 text-sm font-bold text-neutral-80">
                                    1 張大床
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="person" />
                                <p className="mt-2 text-sm font-bold text-neutral-80">
                                    2-4 人
                                </p>
                            </li>
                        </ul>

                        <div className="deco-line h-0.5" />

                        <div className="flex justify-between">
                            <strong className="text-primary-100">
                                NT1 10,000
                            </strong>
                            <button type="button">
                                <img src={rightArrow} alt="see more" />
                            </button>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default RoomPage;
