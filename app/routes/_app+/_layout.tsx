import { Outlet, useLocation } from "@remix-run/react";
import { Footer, Header } from "~/components";

const RootLayout = () => {
    const location = useLocation();

    console.log("location", location.pathname);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;
