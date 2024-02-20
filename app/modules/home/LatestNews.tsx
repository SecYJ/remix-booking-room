import mobileNews1 from "public/assets/mobile/news1.png";
import desktopNews1 from "public/assets/desktop/news1.png";
import decoDot from "public/assets/mobile/dot.png";
import { newsData } from "./data";

const LatestNews = () => {
    return (
        <section className="relative mt-10 bg-primary-10 py-20">
            <img
                src={decoDot}
                className="absolute right-6 top-10 size-[100px] lg:top-[100px]"
                alt=""
            />
            <div className="container lg:grid lg:grid-cols-12">
                <h2 className="relative mb-10 flex flex-col text-3xl text-primary-100">
                    <span>最新</span>
                    <span>消息</span>
                    <span className="deco-line mt-6 h-0.5 w-[140px]" />
                </h2>
                <ul className="space-y-10 lg:col-span-full lg:col-start-3">
                    {newsData.map((news) => (
                        <li key={news.description}>
                            <figure className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
                                <picture className="shrink-0">
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet={desktopNews1}
                                    />
                                    <source
                                        media="(max-width: 1023px)"
                                        srcSet={mobileNews1}
                                    />
                                    <img
                                        src={mobileNews1}
                                        alt="beautiful view"
                                        className="w-full rounded-lg lg:w-[474px]"
                                    />
                                </picture>
                                <div>
                                    <figcaption className="mb-2 mt-6 text-3xl text-black">
                                        {news.title}
                                    </figcaption>
                                    <p className="text-neutral-80">
                                        {news.description}
                                    </p>
                                </div>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LatestNews;
