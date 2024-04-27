import { Banner as BannerLayout } from "~/components";

const Banner = () => {
    return (
        <BannerLayout gap="lg:gap-[152px]">
            <div className="shrink-0 rounded-[2.5rem] border-r border-t border-[#f5f7f9] bg-gradient-to-b from-white/0 to-white/30 py-15 pr-5 font-bold text-white">
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
                        className="w-full rounded-lg bg-white p-5 text-white lg:bg-primary-100"
                    >
                        立即訂房
                    </button>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;
