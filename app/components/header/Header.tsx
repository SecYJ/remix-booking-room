import { Form, Link, useRouteLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MobileNavMenu } from "~/components";
import hamburger from "~/icons/hamburger.svg";
import HeaderNameIcon from "~/icons/hotelName.svg?react";
import HeaderSlogan from "~/icons/hotelSlogan.svg?react";
import { loader as rootLoader } from "~/root";
import { cn } from "~/utils/cn";

const Header = ({ withBg = false }: { withBg?: boolean }) => {
    const data = useRouteLoaderData<typeof rootLoader>("root");
    const [menuVisible, setMenuVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuVisible ? "hidden" : "";
    }, [menuVisible]);

    return (
        <header className={cn("py-4", withBg && "bg-neutral-bg")}>
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
                        <Link to="/rooms" className="text-base font-bold">
                            客房旅宿
                        </Link>
                    </li>

                    <li className="relative">
                        {data?.name ? (
                            <button
                                type="button"
                                className="flex items-center gap-2"
                                onClick={() =>
                                    setIsDropdownOpen((prev) => !prev)
                                }
                            >
                                <IoPersonCircleOutline size={24} />
                                <span className="text-base font-bold">
                                    {data.name}
                                </span>
                            </button>
                        ) : (
                            <Link to="/login">會員登入</Link>
                        )}

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-[260px] rounded-2xl  bg-white py-3 font-bold">
                                <Link
                                    to="/"
                                    className="block w-full bg-primary-10 px-6  py-4 text-primary-100"
                                >
                                    我的帳戶
                                </Link>

                                <Form action="/logout">
                                    <button
                                        type="submit"
                                        className="px-6 py-4 text-neutral-80"
                                    >
                                        登出
                                    </button>
                                </Form>
                            </div>
                        )}
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
