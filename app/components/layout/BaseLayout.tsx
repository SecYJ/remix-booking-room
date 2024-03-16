import { ReactNode } from "react";
import { Header, Footer } from "~/components";

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default BaseLayout;
