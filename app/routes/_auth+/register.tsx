import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import Input from "~/components/form/Input";
import { verifyEmail } from "~/services/verify/verifyEmail";
import { registerSession } from "~/utils/auth.server";
import { REGISTER_STEP_ONE_SCHEMA } from "./schema";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();

    const submission = parseWithZod(formData, {
        schema: REGISTER_STEP_ONE_SCHEMA,
    });

    if (submission.status !== "success") {
        return json({
            type: "form",
            results: submission.reply(),
        } as const);
    }

    const verifyEmailResult = await verifyEmail(submission.value.email);

    if (
        verifyEmailResult.status === true &&
        verifyEmailResult.result.isEmailExists
    ) {
        return json({ type: "email", message: "Email 已被使用" } as const, {
            status: 400,
        });
    }

    const session = await registerSession.getSession();
    Object.entries(submission.value).forEach(([key, val]) =>
        session.set(key as keyof typeof submission.value, val),
    );

    return redirect("/register/step-2", {
        headers: {
            "Set-Cookie": await registerSession.commitSession(session),
        },
    });
};

const RegisterPage = () => {
    const actionData = useActionData<typeof action>();

    const formError =
        actionData?.type === "form" ? actionData.results : undefined;
    const emailError =
        actionData?.type === "email" ? actionData.message : undefined;

    const [form, fields] = useForm({
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        constraint: getZodConstraint(REGISTER_STEP_ONE_SCHEMA),
        lastResult: formError,
        defaultNoValidate: false,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: REGISTER_STEP_ONE_SCHEMA });
        },
    });

    return (
        <>
            <Form method="POST" {...getFormProps(form)} className="space-y-4">
                <Input
                    {...getInputProps(fields.email, {
                        type: "email",
                    })}
                    label="電子信箱"
                    placeholder="hello@exsample.com"
                    errorMsg={emailError ?? fields?.email?.errors?.[0]}
                />
                <Input
                    {...getInputProps(fields.password, {
                        type: "password",
                    })}
                    label="密碼"
                    placeholder="請輸入密碼"
                    errorMsg={fields?.password?.errors?.[0]}
                />
                <Input
                    {...getInputProps(fields.confirmPassword, {
                        type: "password",
                    })}
                    label="確認密碼"
                    placeholder="請再輸入一次密碼"
                    errorMsg={fields?.confirmPassword?.errors?.[0]}
                />
            </Form>

            <button
                type="submit"
                form={form.id}
                className="mt-10 w-full rounded-lg bg-white py-4 font-bold text-neutral-60"
            >
                下一步
            </button>

            <div className="mt-4 flex gap-2">
                <span className="font-medium">已經有會員了嗎？</span>
                <span className="font-bold text-primary-100">立即登入</span>
            </div>
        </>
    );
};

export default RegisterPage;
