import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import Input from "~/components/form/Input";
import { register } from "~/services/users/register";
import { getRegisterFormData } from "~/utils/auth.server";
import { tokenSession } from "~/utils/token.server";
import { REGISTER_STEP_TWO_SCHEMA } from "./schema";

export const action = async ({ request }: ActionFunctionArgs) => {
    const {
        registerSession,
        session,
        formData: registerData,
    } = await getRegisterFormData(request);
    const formData = await request.formData();

    const submissionData = {
        name: String(formData.get("username")),
        email: registerData.email || "",
        password: registerData.password || "",
        phone: String(formData.get("phoneNumber")),
        birthday: `${formData.get("birthYear")}/${formData.get(
            "birthMonth",
        )}/${formData.get("birthDay")}`,
        address: {
            zipcode: 802,
            detail: String(formData.get("address")),
        },
    };

    const res = await register(submissionData);

    const token = await tokenSession.getSession();
    token.set("token", res.token);

    return redirect("/", {
        headers: [
            ["Set-Cookie", await tokenSession.commitSession(token)],
            ["Set-Cookie", await registerSession.destroySession(session)],
        ],
    });
};

const RegisterStep2Page = () => {
    const [form, fields] = useForm({
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        onValidate: ({ formData }) => {
            return parseWithZod(formData, { schema: REGISTER_STEP_TWO_SCHEMA });
        },
    });

    return (
        <div>
            <Form
                method="POST"
                onSubmit={form.onSubmit}
                className="space-y-4"
                id={form.id}
            >
                <Input
                    name={fields.username.name}
                    errormsg={fields.username.errors?.[0]}
                    label="姓名"
                    placeholder="請輸入姓名"
                />
                <Input
                    name={fields.phoneNumber.name}
                    errormsg={fields.phoneNumber.errors?.[0]}
                    label="手機號碼"
                    placeholder="請輸入手機號碼"
                />
                <div>
                    <label
                        htmlFor="birthday"
                        className="mb-2 inline-block text-sm font-bold"
                    >
                        生日
                    </label>
                    <div className="grid grid-cols-3 gap-2 ">
                        <select
                            className="rounded-lg bg-white p-4 text-neutral-80"
                            name={fields.birthYear.name}
                        >
                            {Array.from({ length: 10 }, (_, i) => (
                                <option value={1990 + i} key={i}>
                                    {1990 + i}
                                </option>
                            ))}
                        </select>
                        <select
                            className="rounded-lg bg-white p-4 text-neutral-80"
                            name={fields.birthMonth.name}
                        >
                            {Array.from({ length: 12 }, (_, i) => (
                                <option value={i + 1} key={i}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select
                            className="rounded-lg bg-white p-4 text-neutral-80"
                            name={fields.birthDay.name}
                        >
                            {Array.from({ length: 30 }, (_, i) => (
                                <option value={i + 1} key={i}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <select
                        className="rounded-lg bg-white p-4 text-neutral-80"
                        name={fields.state.name}
                    >
                        <option value="高雄市">高雄市</option>
                        <option value="台北市">台北市</option>
                        <option value="台南市">台南市</option>
                    </select>
                    <select
                        className="rounded-lg bg-white p-4 text-neutral-80"
                        name={fields.city.name}
                    >
                        <option value="新興區">新興區</option>
                        <option value="台北市">台北市</option>
                        <option value="台南市">台南市</option>
                    </select>
                </div>
                <Input
                    placeholder="請輸入詳細地址"
                    name={fields.address.name}
                    errormsg={fields.address.errors?.[0]}
                />
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name={fields.agreeTerm.name}
                        id={fields.agreeTerm.id}
                        className="size-6 rounded border border-neutral-60"
                    />
                    <label htmlFor={fields.agreeTerm.id}>
                        我已閱讀並同意本網站個資使用規範
                    </label>
                </div>
            </Form>

            <div>
                <button
                    type="submit"
                    form={form.id}
                    className="mt-10 w-full rounded-lg bg-primary-100 py-4 text-white"
                >
                    完成註冊
                </button>
                <div className="mt-4 flex gap-2">
                    <p>已經有會員了嗎？</p>
                    <Link
                        to="/login"
                        className="text-sm text-primary-100 underline"
                    >
                        立即登入
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterStep2Page;
