import DotDeco from "public/assets/mobile/dot.png";

const About = () => {
    return (
        <section className="relative pb-24 pt-20">
            <img
                className="absolute -top-1/4 left-6 size-[100px]"
                src={DotDeco}
                alt="dot deco"
            />
            <div className="relative min-h-[600px] bg-[url('/assets/mobile/about.png')] bg-cover bg-center lg:bg-[url('/assets/desktop/about.png')]">
                <div className="absolute bottom-0 left-1/2 ml-10 mr-5 -translate-x-1/2 translate-y-10 rounded-[2.5rem] rounded-br-none border-b border-l border-white bg-gradient-to-b from-[#140f0a] to-[#be9c7c] p-6 lg:w-full lg:max-w-screen-lg lg:p-20">
                    <div className="mb-10 flex items-center gap-10">
                        <h2 className="flex flex-col text-3xl font-bold">
                            <span>關於</span>
                            <span>我們</span>
                        </h2>
                        <div className="h-0.5 w-40 bg-white" />
                    </div>
                    <div className="space-y-4 text-sm font-medium lg:text-base">
                        <p>
                            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                        </p>
                        <p>
                            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                        </p>
                        <p>
                            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
                        </p>
                        <p>
                            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
