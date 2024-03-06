import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { storeUserInSession } from "~/session/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const user = {
        username: (formData.get("username") as string) || "",
        password: (formData.get("password") as string) || "",
        id: 1,
    };
    const userCookie = await storeUserInSession(user);

    return redirect("/dashboard", {
        headers: {
            "Set-Cookie": userCookie,
        },
    });
};

const RegisterPage = () => {
    return (
        <div className="mt-20">
            <Form
                method="post"
                className="mx-auto grid max-w-sm auto-rows-auto gap-8 text-red-600"
            >
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">submit</button>
            </Form>
        </div>
    );
};

export default RegisterPage;
