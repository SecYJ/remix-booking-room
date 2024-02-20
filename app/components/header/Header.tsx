import { useState } from "react";
import { Link } from "@remix-run/react";
import headerName from "public/assets/hotelName.svg";
import headerSlogan from "public/assets/hotelSlogan.svg";
import hamburger from "public/assets/hamburger.svg";
import { MobileNavMenu } from "~/components";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <header className="container fixed left-0 right-0 top-0 mb-8 flex justify-between py-4">
                <Link to="/">
                    <img src={headerName} alt="" />
                    <img src={headerSlogan} alt="" />
                </Link>
                <button type="button" onClick={() => setMenuVisible(true)}>
                    <img src={hamburger} alt="" />
                </button>
            </header>
            {menuVisible && (
                <MobileNavMenu onClose={() => setMenuVisible(false)} />
            )}
        </>
    );
};

export default Header;
