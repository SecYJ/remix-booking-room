import About from "~/modules/home/About";
import Banner from "~/modules/home/Banner";
import Cuisine from "~/modules/home/Cuisine";
import LatestNews from "~/modules/home/LatestNews";
import ShowroomBanner from "~/modules/home/ShowroomBanner";

const HomePage = () => {
    return (
        <>
            <Banner />
            <LatestNews />
            <About />
            <ShowroomBanner />
            <Cuisine />
        </>
    );
};

export default HomePage;
