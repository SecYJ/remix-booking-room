import { Outlet } from "@remix-run/react";
import registerBanner from "public/assets/registerBanner.svg";

const RegisterPage = () => {
	return (
		<div className="grid lg:grid-cols-2 container">
			<div>
				<picture>
					<source srcSet={registerBanner} media="(min-width: 1024px)" />
				</picture>
			</div>
			<div>
				<h1 className="font-bold flex flex-col gap-2">
					<span className="text-primary-100 text-sm">享樂酒店，誠摯歡迎</span>
					<span className="text-3xl tracking-[1.6]">立即註冊</span>
				</h1>

				{/* NOTE: steps */}
				<div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 mt-8">
					<div className="font-bold">
						<div className="size-8 grid place-items-center bg-primary-100 rounded-full mb-1 text-center">
							1
						</div>
						<p className="text-sm">輸入信箱及密碼</p>
					</div>

					<div className="h-0.5 bg-neutral-60 rounded-[10px] w-full" />

					<div className="font-bold">
						<div className="size-8 grid place-items-center bg-primary-100 rounded-full mb-1 mx-auto">1</div>
						<p className="text-sm">輸入信箱及密碼</p>
					</div>
				</div>

				<Outlet />
			</div>
		</div>
	);
};

export default RegisterPage;
