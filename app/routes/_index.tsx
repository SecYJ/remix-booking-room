import About from "~/modules/home/About";
import Banner from "~/modules/home/Banner";
import LatestNews from "~/modules/home/LatestNews";

const HomePage = () => {
    return (
        <>
            <Banner />
            <LatestNews />
            <About />
        </>
    );
};

export default HomePage;
