import { PropsWithChildren } from "react";
import { cn } from "utils/cn";

interface BannerProps {
    gap: string;
}

const Banner = ({ children, gap }: PropsWithChildren<BannerProps>) => {
    return (
        <section className="relative">
            {/* NOTE: overlay */}
            <div className="absolute inset-0 z-[1] bg-black/60" />

            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/desktop/banner.png"
                />
                <source srcSet="/assets/mobile/banner.png" />
                <img
                    src="/assets/mobile/banner.png"
                    className="min-h-[calc(100vh-3.75rem)] opacity-80"
                    alt=""
                />
            </picture>

            <div
                className={cn(
                    "absolute left-1/2 top-1/2 isolate z-[2] flex -translate-x-1/2 -translate-y-1/2 flex-col gap-10 lg:flex-row lg:items-center lg:justify-center",
                    gap,
                )}
            >
                <div className="flex shrink-0 flex-col items-center gap-5 lg:items-start">
                    <h2 className="grid grid-rows-2 justify-items-center font-bold text-[#BE9C7C] lg:justify-items-start">
                        <span className="text-[2.5rem]">享樂酒店</span>
                        <span className="text-2xl">Enjoyment Luxury Hotel</span>
                    </h2>
                    <div className="h-20 w-0.5 bg-gradient-to-r from-[#be9c7c] to-white lg:h-0.5 lg:w-full" />
                </div>

                {children}
                {/* {cloneElement(children as JSX.Element, {
                    className: "isolate",
                })} */}
            </div>
        </section>
    );
};

export default Banner;
