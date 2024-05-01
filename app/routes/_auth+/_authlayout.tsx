import { Outlet, useLocation } from "@remix-run/react";
import { Header } from "~/components";
import { cn } from "~/utils/cn";
import { FaCheck } from "react-icons/fa6";
import line from "/assets/desktop/line3.png";

const AuthLayout = () => {
    const { pathname } = useLocation();
    const isStep2 = pathname === "/register/step-2";
    const isRegister = pathname === "/register";

    return (
        <div>
            <Header />
            <div className="container grid lg:grid-cols-2">
                <img
                    src="/assets/desktop/register.png"
                    alt="register"
                    className="hidden lg:block"
                />
                <div className="relative grid lg:place-items-center">
                    <div className="w-full lg:max-w-[50%]">
                        <img
                            src={line}
                            alt="line"
                            className="absolute left-0 top-18 mb-1.5"
                        />
                        <div className="mb-10 mt-6 grid gap-4">
                            <div className="isolate font-bold">
                                <p className="mb-2 text-sm font-bold text-primary-100">
                                    享樂酒店，誠摯歡迎
                                </p>
                                <h1 className="text-3xl">立即開始旅程</h1>
                            </div>

                            {/* <h1 className="flex flex-col gap-2">
                                <span className="text-sm text-primary-100">
                                    享樂酒店，誠摯歡迎
                                </span>
                               
                                    <span className="text-3xl">立即註冊</span>
                               
                            </h1> */}
                            {isRegister && (
                                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
                                    <div>
                                        <div className="mx-auto mb-1 grid size-8 place-items-center rounded-full bg-primary-100 font-bold text-white">
                                            {isStep2 ? <FaCheck /> : 1}
                                        </div>
                                        <p>輸入信箱及密碼</p>
                                    </div>
                                    <div className="h-0.5 rounded-xl bg-neutral-60" />
                                    <div>
                                        <div
                                            className={cn(
                                                "mx-auto mb-1 grid size-8 place-items-center rounded-full border font-bold text-white",
                                                pathname === "/register/step-2"
                                                    ? "border-primary-100 bg-primary-100"
                                                    : "border-neutral-60 text-neutral-60",
                                            )}
                                        >
                                            2
                                        </div>
                                        <p>填寫基本資料</p>
                                    </div>
                                </div>
                            )}
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
