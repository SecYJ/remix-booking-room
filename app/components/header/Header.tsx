import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import HeaderNameIcon from "~/icons/hotelName.svg?react";
import HeaderSlogan from "~/icons/hotelSlogan.svg?react";
import hamburger from "~/icons/hamburger.svg";
import { MobileNavMenu } from "~/components";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuVisible ? "hidden" : "";
    }, [menuVisible]);

    return (
        <header className="sticky top-0 z-40 bg-neutral-bg">
            <nav className="container flex justify-between  py-4">
                <Link to="/">
                    <HeaderNameIcon />
                    <HeaderSlogan />
                </Link>
                <button type="button" onClick={() => setMenuVisible(true)}>
                    <img src={hamburger} alt="" />
                </button>
            </nav>
            {menuVisible && (
                <MobileNavMenu onClose={() => setMenuVisible(false)} />
            )}
        </header>
    );
};

export default Header;
