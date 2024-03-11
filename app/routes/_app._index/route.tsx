import {
    About,
    Banner,
    Cuisine,
    LatestNews,
    ShowroomBanner,
    Traffic,
} from "./components";

const HomePage = () => {
    return (
        <>
            <Banner />
            <LatestNews />
            <About />
            <ShowroomBanner />
            <Cuisine />
            <Traffic />
        </>
    );
};

export default HomePage;
