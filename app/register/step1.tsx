import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Input } from "components/shared/form";
import { SessionData, commitSession, getSession } from "~/sessions";

export const action = async ({ request }: ActionFunctionArgs) => {
	// const session = await getSession(request.headers.get("register form"));
	const session = await getSession("register form");

	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);

	Object.entries(data).forEach(([key, value]) => session.set("register"));
	// session.set

	return redirect("/register/step2", {
		// headers: {
		// 	"Set-Cookie": `email=${data.email}; Max-Age=3600; Path=/; HttpOnly; SameSite=Strict`,
		// },
		headers: await commitSession,
	});
};

const Step1 = () => {
	return (
		<Form method="post" className="mt-14 space-y-4">
			<Input name="email" label="電子信箱" placeholder="hello@example.com" />
			<Input name="password" label="密碼" type="password" placeholder="請輸入密碼" />
			<Input name="confirm-password" label="確認密碼" type="password" placeholder="請再輸入一次密碼" />
			<button
				type="submit"
				className="mt-10 py-4 px-8 rounded-lg font-bold text-neutral-60 w-full bg-neutral-40 disabled:opacity-50"
				// disabled={navigation.state === "submitting"}
			>
				會員登入
			</button>
		</Form>
	);
};

export default Step1;
