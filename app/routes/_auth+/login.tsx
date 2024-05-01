import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { LOGIN_SCHEMA } from "./schema";
import Input from "~/components/form/Input";
import { login } from "~/services/users/login";
import { tokenSession } from "~/utils/token.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const session = await tokenSession.getSession(
        request.headers.get("Cookie"),
    );
    const submission = parseWithZod(formData, { schema: LOGIN_SCHEMA });

    if (submission.status !== "success") {
        return json(submission.reply());
    }

    const response = await login(
        submission.payload.email as string,
        submission.payload.password as string,
    );

    console.log("response", response);
    session.set("token", response.token);
    session.set("username", response.result.name);

    return redirect("/", {
        headers: {
            "Set-Cookie": await tokenSession.commitSession(session),
        },
    });
};

const LoginPage = () => {
    const [form, fields] = useForm({
        shouldRevalidate: "onInput",
        shouldValidate: "onSubmit",
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: LOGIN_SCHEMA });
        },
    });

    return (
        <div className="relative lg:grid lg:place-items-center">
            <Form
                method="POST"
                id={form.id}
                className="mt-10 w-full"
                onSubmit={form.onSubmit}
            >
                <div className="space-y-4 *:grid *:auto-rows-auto *:gap-2 [&_input]:rounded-lg [&_input]:p-4 [&_input]:text-sm [&_input]:font-medium [&_input]:placeholder-neutral-60 [&_label]:text-sm">
                    <Input
                        label="電子信箱"
                        type="email"
                        name={fields.email.name}
                        placeholder="請輸入電子信箱"
                        errormsg={fields.email.errors?.[0]}
                    />
                    <Input
                        label="密碼"
                        type="password"
                        name={fields.password.name}
                        placeholder="請輸入密碼"
                        errormsg={fields.password.errors?.[0]}
                    />
                </div>
                <div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-2 text-sm font-bold">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="size-6 rounded border-neutral-60 bg-white"
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
            {/* </div> */}
        </div>
    );
};

export default LoginPage;
