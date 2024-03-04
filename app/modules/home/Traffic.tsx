import mapMobile from "public/assets/mobile/map.png";
import mapDesktop from "public/assets/desktop/map.png";
import { FaCar } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { cloneElement } from "react";
import lineMobile from "public/assets/mobile/line.png";
import lineDesktop from "public/assets/desktop/line3.png";

const data = [
    {
        icon: <FaCar />,
        title: "自行開車",
        description:
            "如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。",
    },
    {
        icon: <IoMdTrain />,
        title: "高鐵/火車",
        description:
            "如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。",
    },
    {
        icon: <FaCarSide />,
        title: "禮賓車服務",
        description:
            "承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567",
    },
];

const Traffic = () => {
    return (
        <section className="bg-neutral-bg pt-20 lg:pt-30">
            <div className="container">
                <div className="flex items-center gap-10">
                    <h2 className="grid grid-rows-2 text-3xl font-bold tracking-wide text-primary-100 lg:text-5xl">
                        <span>交通</span>
                        <span>方式</span>
                    </h2>
                    <div className="deco-line h-0.5 w-[194px] lg:w-[161px]" />
                </div>

                <figure className="mt-10 lg:mt-20">
                    <figcaption className="mb-4 font-bold">
                        台灣高雄市新興區六角路123號
                    </figcaption>
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={mapDesktop}
                        />
                        <img
                            src={mapMobile}
                            alt="Google Map"
                            className="w-full"
                        />
                    </picture>

                    <ul className="mt-6 grid gap-6 lg:mt-10 lg:grid-cols-3">
                        {data.map((item) => (
                            <li key={item.title} className="space-y-2">
                                {cloneElement(item.icon, {
                                    className: "h-8 w-9 lg:w-15 lg:h-13",
                                    color: "#be9c7c",
                                })}
                                <h4>{item.title}</h4>
                                <p className="text-sm">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </figure>
            </div>

            <picture>
                <source media="(min-width: 1024px)" src={lineDesktop} />
                <img
                    src={lineMobile}
                    alt="Line"
                    className="h-21 mt-10 w-full lg:mt-20"
                />
            </picture>
        </section>
    );
};

export default Traffic;
