import { createPortal } from "react-dom";
import { NavLink } from "@remix-run/react";
import { cn } from "~/utils/cn";
import CloseIcon from "~/icons/close.svg?react";
import { NAVIGATION_LINKS } from "~/constants/navigation.ts/navigation";

const MobileNavMenu = ({ onClose }: { onClose: () => void }) => {
    return createPortal(
        <div className="fixed inset-0 z-50 grid items-center bg-neutral-bg px-5">
            <button
                type="button"
                className="absolute right-10 top-10"
                onClick={() => onClose()}
            >
                <CloseIcon />
                <div className="sr-only">close navigation menu</div>
            </button>
            <nav>
                <ul className="space-y-8 text-center font-bold">
                    {NAVIGATION_LINKS.map((option) => (
                        <li key={option.label}>
                            <NavLink
                                className={({ isActive }) =>
                                    cn(
                                        "block w-full rounded-lg py-4 transition-colors duration-75 hover:bg-primary-100",
                                        isActive && "bg-primary-100",
                                    )
                                }
                                to={option.link}
                            >
                                {option.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>,
        document.body,
    );
};

export default MobileNavMenu;
