import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MobileNavMenu } from "~/components";
import hamburger from "~/icons/hamburger.svg";
import HeaderNameIcon from "~/icons/hotelName.svg?react";
import HeaderSlogan from "~/icons/hotelSlogan.svg?react";
import { cn } from "~/utils/cn";

const Header = ({ withBg = false }: { withBg?: boolean }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const isLogin = true;

    useEffect(() => {
        document.body.style.overflow = menuVisible ? "hidden" : "";
    }, [menuVisible]);

    return (
        <header
            className={cn(
                "absolute left-0 right-0 top-0 z-40 py-4",
                withBg && "bg-neutral-bg",
            )}
        >
            <nav className="container flex justify-between py-4">
                <Link to="/">
                    <HeaderNameIcon />
                    <HeaderSlogan />
                </Link>

                {/* NOTE: for mobile only */}
                <button
                    type="button"
                    className="lg:hidden"
                    onClick={() => setMenuVisible(true)}
                >
                    <img src={hamburger} alt="" />
                </button>

                {/* NOTE: for desktop */}
                <ul className="hidden lg:flex lg:gap-12">
                    <li>
                        <Link to="/" className="text-base font-bold">
                            客房旅宿
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="flex items-center gap-2">
                            {isLogin ? (
                                <>
                                    <IoPersonCircleOutline size={24} />
                                    <span className="text-base font-bold">
                                        Jessica
                                    </span>
                                </>
                            ) : (
                                "會員登入"
                            )}
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/"
                            className="rounded-lg bg-primary-100 px-8 py-4 font-bold"
                        >
                            立即訂房
                        </Link>
                    </li>
                </ul>
            </nav>
            {menuVisible && (
                <MobileNavMenu onClose={() => setMenuVisible(false)} />
            )}
        </header>
    );
};

export default Header;
