import { Outlet } from "@remix-run/react";
import { Footer, Header } from "~/components";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;
