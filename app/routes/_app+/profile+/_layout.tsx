import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useRouteLoaderData } from "@remix-run/react";
import { requireUser } from "~/utils/auth.server";
import { loader as rootLoader } from "~/root";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await requireUser(request);
    return null;
};

const ProfileLayout = () => {
    const user = useRouteLoaderData<typeof rootLoader>("root");

    return (
        <div>
            <div className="relative h-[206px] lg:h-[384px]">
                <img
                    src="/assets/desktop/hero.png"
                    className="h-full"
                    alt="profile banner"
                />
                <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                        <img
                            src="/assets/desktop/user1.png"
                            className="size-18 lg:size-36"
                            alt="icon"
                        />
                        <h1 className="text-3xl font-bold lg:text-5xl">
                            Hello, {user?.name}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container mt-10">
                <ul className="flex gap-12 text-sm font-bold">
                    <li className="relative">
                        <Link to="/profile">個人資料</Link>
                        <div className="absolute -bottom-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-xl bg-primary-100" />
                    </li>
                    <li>
                        <Link to="/profile/orders">我的訂單</Link>
                    </li>
                </ul>
                <div className="mt-14">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
