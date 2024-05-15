import { json } from "@remix-run/node";
import {
    About,
    Banner,
    Cuisine,
    LatestNews,
    ShowroomBanner,
    Traffic,
} from "./components";
import { getCulinaries, getNews } from "./queries";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const [news, culinaries] = await Promise.all([getNews(), getCulinaries()]);

    console.log("culinaries", culinaries);

    return json({ news: news.result, culinaries: culinaries.result });
};

const HomePage = () => {
    const { news, culinaries } = useLoaderData<typeof loader>();

    return (
        <>
            <Banner />
            <LatestNews news={news} />
            <About />
            <ShowroomBanner />
            <Cuisine culinaries={culinaries} />
            <Traffic />
        </>
    );
};

export default HomePage;
