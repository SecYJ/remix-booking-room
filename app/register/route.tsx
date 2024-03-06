import { Outlet } from "@remix-run/react";
import RegisterBanner from "~/icons/registerBanner.svg?react";

const RegisterPage = () => {
    return (
        <div className="container grid lg:grid-cols-2">
            <div>
                <RegisterBanner />
            </div>
            <div>
                <h1 className="flex flex-col gap-2 font-bold">
                    <span className="text-sm text-primary-100">
                        享樂酒店，誠摯歡迎
                    </span>
                    <span className="text-3xl tracking-[1.6]">立即註冊</span>
                </h1>

                {/* NOTE: steps */}
                <div className="mt-8 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                    <div className="font-bold">
                        <div className="mb-1 grid size-8 place-items-center rounded-full bg-primary-100 text-center">
                            1
                        </div>
                        <p className="text-sm">輸入信箱及密碼</p>
                    </div>

                    <div className="h-0.5 w-full rounded-[10px] bg-neutral-60" />

                    <div className="font-bold">
                        <div className="mx-auto mb-1 grid size-8 place-items-center rounded-full bg-primary-100">
                            1
                        </div>
                        <p className="text-sm">輸入信箱及密碼</p>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default RegisterPage;
