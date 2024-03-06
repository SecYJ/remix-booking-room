import { useState } from "react";
import { Link } from "@remix-run/react";
import HeaderNameIcon from "~/icons/hotelName.svg?react";
import HeaderSlogan from "~/icons/hotelSlogan.svg?react";
import hamburger from "~/icons/hamburger.svg";
import { MobileNavMenu } from "~/components";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <header className="container fixed left-0 right-0 top-0 z-10 mb-8 flex justify-between py-4">
                <Link to="/">
                    <HeaderNameIcon />
                    <HeaderSlogan />
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
