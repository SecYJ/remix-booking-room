import mobileBanner1 from "public/assets/mobile/banner.png";
import desktopBanner1 from "public/assets/desktop/banner.png";

const Banner = () => {
    return (
        <section className="relative h-screen">
            <picture>
                <source media="(min-width: 1024px)" srcSet={desktopBanner1} />
                <source srcSet={mobileBanner1} />
                <img src={mobileBanner1} className="opacity-80" alt="" />
            </picture>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[152px]">
                <div className="flex shrink-0 flex-col items-center gap-5 lg:items-start">
                    <h2 className="grid grid-rows-2 justify-items-center font-bold text-[#BE9C7C] lg:justify-items-start">
                        <span className="text-[2.5rem]">享樂酒店</span>
                        <span className="text-2xl">Enjoyment Luxury Hotel</span>
                    </h2>
                    <div className="h-20 w-0.5 bg-gradient-to-r from-[#be9c7c] to-white lg:h-0.5 lg:w-full" />
                </div>

                <div className="w-[291px] rounded-[2.5rem] border-r border-t border-[#f5f7f9] bg-gradient-to-b from-white/0 to-white/30 py-15 pr-5 font-bold text-white lg:w-[678px]">
                    <div className="-translate-x-10 lg:-translate-x-12">
                        <h1 className="flex flex-col gap-2 text-5xl lg:text-[100px]/[120px]">
                            <span>高雄</span>
                            <span>豪華住宿之選</span>
                        </h1>
                        <p className="mb-10 mt-6 lg:mb-15">
                            我們致力於為您提供無與倫比的奢華體驗與優質服務
                        </p>
                        <button
                            type="button"
                            className="w-full rounded-lg bg-white p-5 text-black lg:bg-primary-100"
                        >
                            立即訂房
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
