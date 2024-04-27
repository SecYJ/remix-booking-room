import { Link, Outlet } from "@remix-run/react";

const Profile = () => {
    return (
        <div>
            <div className="h-[206px] bg-red-600"></div>
            <div className="container mt-10">
                <ul className="flex gap-12 text-sm font-bold">
                    <li className="relative">
                        <Link to="/">個人資料</Link>
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

export default Profile;
