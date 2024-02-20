import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { Input } from "components/shared/form";

export const action = async ({ request }: ActionFunctionArgs) => {
	const data = await request.formData();
	const email = String(data.get("email"));
	const password = String(data.get("password"));

	const formError = {
		email: {
			value: email,
			errorMsg: "",
		},
		password: {
			value: password,
			errorMsg: "",
		},
	};

	if (!email) formError.email.errorMsg = "请输入邮件地址";
	if (email.length < 5) formError.email.errorMsg = "请输入正确的邮件地址";
	if (!password) formError.password.errorMsg = "请输入密码";

	if (Object.values(formError).some(Boolean)) return formError;

	return "登录成功";
};

const LoginPage = () => {
	const navigation = useNavigation();
	const actionData = useActionData<typeof action>();

	return (
		<div className="container">
			<Form method="post" className="space-y-4">
				<Input
					label="電子信箱"
					type="email"
					name="email"
					defaultValue={typeof actionData === "object" ? actionData.email.value : ""}
					placeholder="请输入邮件地址"
					errorMsg={typeof actionData === "object" ? actionData.email.errorMsg : ""}
				/>
				<Input
					label="密碼"
					type="password"
					name="password"
					defaultValue={typeof actionData === "object" ? actionData.password.value : ""}
					placeholder="请输入密码"
					errorMsg={typeof actionData === "object" ? actionData.password.errorMsg : ""}
				/>

				<div className="grid grid-cols-[auto_1fr_auto] gap-2 items-center">
					<input
						type="checkbox"
						name="remember-account"
						id="remember-account"
						// className="appearance-none bg-primary-100"
					/>
					<label htmlFor="remember-account" className="text-sm font-bold">
						記住帳號
					</label>
					<Link to="/login" className="text-primary-100 underline text-sm font-bold">
						忘記密碼？
					</Link>
				</div>

				<button
					type="submit"
					className="mt-10 py-4 px-8 rounded-lg font-bold text-neutral-60 w-full bg-neutral-40 disabled:opacity-50"
					disabled={navigation.state === "submitting"}
				>
					會員登入
				</button>
			</Form>
			<div className="flex gap-2 mt-10">
				<p>沒有會員嗎？</p>
				<Link to="/register" prefetch="intent" className="text-primary-100 underline">
					前往註冊
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
