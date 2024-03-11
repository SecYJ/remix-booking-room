import { Form, Link } from "@remix-run/react";
import line from "/assets/mobile/line.png";

const LoginPage = () => {
    return (
        <div className="container mt-[6.5rem]">
            <img src={line} alt="line" className="mb-1.5" />
            <div className="font-bold">
                <p className="mb-2 text-sm font-bold text-primary-100 ">
                    享樂酒店，誠摯歡迎
                </p>
                <h1 className="text-3xl">立即開始旅程</h1>
            </div>

            <Form className="mt-10">
                <div className="space-y-4 *:grid *:auto-rows-auto *:gap-2 [&_input]:rounded-lg [&_input]:p-4 [&_input]:text-sm [&_input]:font-medium [&_input]:placeholder-neutral-60 [&_label]:text-sm">
                    <div>
                        <label htmlFor="email">電子信箱</label>
                        <input type="text" placeholder="請輸入電子信箱" />
                    </div>
                    <div>
                        <label htmlFor="email">密碼</label>
                        <input type="password" placeholder="請輸入密碼" />
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-2 text-sm font-bold">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="appearance-none"
                    />
                    <label htmlFor="remember-me">記住帳號</label>
                    <Link to="/" className="text-primary-100">
                        忘記密碼？
                    </Link>
                </div>
                <button
                    type="submit"
                    className="my-10 w-full rounded-lg bg-neutral-40 px-8 py-4 text-neutral-60"
                >
                    會員登入
                </button>
                <div className="flex gap-2 text-sm">
                    <span className="font-medium">沒有會員嗎？</span>
                    <Link
                        to="/register"
                        className="font-bold text-primary-100 underline"
                    >
                        前往註冊
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;
