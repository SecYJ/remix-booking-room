import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { requireUser } from "~/session/guard.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    // const formData = await request.formData();
    const cookie = await requireUser(request);
    console.log(cookie);
    // console.log(formData.get("username"));
    return null;
};

const Login = () => {
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

export default Login;
