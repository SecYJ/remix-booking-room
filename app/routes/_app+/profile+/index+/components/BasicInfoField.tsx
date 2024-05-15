import {
    getFormProps,
    getInputProps,
    getSelectProps,
    useForm,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import {
    Form,
    useNavigation,
    useRouteLoaderData,
    useSearchParams,
} from "@remix-run/react";
import { format } from "date-fns";
import { loader } from "~/root";
import { BASIC_INFO_SCHEMA } from "../schema/schema";
import Card from "./Card";
import Input from "~/components/form/Input";
import { useEffect } from "react";

interface Props {
    isEditing: boolean;
    hasPasswordField: boolean;
}

const BasicInfoField = ({ isEditing, hasPasswordField }: Props) => {
    const user = useRouteLoaderData<typeof loader>("root");
    const navigation = useNavigation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [form, fields] = useForm({
        shouldRevalidate: "onInput",
        constraint: getZodConstraint(BASIC_INFO_SCHEMA),
        shouldValidate: "onSubmit",
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: BASIC_INFO_SCHEMA });
        },
        defaultNoValidate: false,
    });

    const birthDate = format(user?.birthday as string, "yyyy 年 MM 月 dd 日");

    useEffect(() => {
        // if (navigation.state === "loading" || navigation.formMethod === "GET") {
        //     return;
        // }

        // if (navigation.state === "idle" && navigation.formMethod === "GET")
        //     return;
        // console.log("work here");

        console.log("work");
        const newParams = searchParams
            .getAll("edit")
            .filter((query) => query !== "basic-info");

        // setSearchParams(
        //     { edit: newParams.join("") },
        //     {
        //         preventScrollReset: true,
        //     },
        // );
    }, [navigation.state]);

    if (isEditing) {
        return (
            <Card title="基本資料">
                <Form
                    method="POST"
                    {...getFormProps(form)}
                    className="space-y-4 lg:space-y-6"
                >
                    <Input
                        label="姓名"
                        placeholder="請輸入姓名"
                        labelTextColor="text-black"
                        labelBold
                        {...getInputProps(fields.username, {
                            type: "text",
                        })}
                        errorMsg={fields?.username?.errors?.[0]}
                    />

                    <Input
                        label="手機號碼"
                        placeholder="請輸入手機號碼"
                        labelTextColor="text-black"
                        labelBold
                        {...getInputProps(fields.phoneNumber, {
                            type: "text",
                        })}
                        errorMsg={fields?.phoneNumber?.errors?.[0]}
                    />

                    <div className="grid gap-2">
                        <label
                            htmlFor="1"
                            className="text-sm font-bold text-black lg:text-base"
                        >
                            生日
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <select
                                className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80"
                                {...getSelectProps(fields.birthYear)}
                            >
                                {Array.from({ length: 10 }, (_, index) => (
                                    <option value={1990 + index} key={index}>
                                        {1990 + index}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80"
                                {...getSelectProps(fields.birthMonth)}
                            >
                                {Array.from({ length: 12 }, (_, index) => (
                                    <option value={1 + index} key={index}>
                                        {1 + index}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80"
                                {...getSelectProps(fields.birthDay)}
                            >
                                {Array.from({ length: 30 }, (_, index) => (
                                    <option value={1 + index} key={index}>
                                        {1 + index}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <label
                            htmlFor="1"
                            className="col-span-full text-sm font-bold text-black lg:text-base"
                        >
                            地址
                        </label>
                        <select
                            className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80"
                            {...getSelectProps(fields.state)}
                        >
                            <option value="高雄市">高雄市</option>
                            <option value="台北市">台北市</option>
                            <option value="新竹市">新竹市</option>
                        </select>
                        <select
                            className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80"
                            {...getSelectProps(fields.city)}
                        >
                            <option value="新興區">新興區</option>
                            <option value="屏东區">屏东區</option>
                            <option value="花莲區">花莲區</option>
                        </select>
                    </div>
                    <input
                        {...getInputProps(fields.address, {
                            type: "text",
                        })}
                        placeholder="請輸入詳細地址"
                        className="w-full rounded-lg border border-neutral-40 p-4 text-black placeholder-neutral-60"
                    />
                </Form>

                <button
                    form={form.id}
                    type="submit"
                    name="_action"
                    value="basic-info"
                    className="mt-6 w-full rounded-lg bg-neutral-40 px-8 py-4 text-neutral-60 lg:w-auto"
                >
                    儲存設定
                </button>
            </Card>
        );
    }

    return (
        <Card title="基本資料">
            <div className="space-y-4 *:text-sm lg:*:mb-6 lg:*:text-base">
                <div>
                    <p className="mb-2 font-medium text-neutral-80">姓名</p>
                    <p className="font-bold text-black">{user?.name}</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">手機號碼</p>
                    <p className="font-bold text-black">{user?.phone}</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">生日</p>
                    <p className="font-bold text-black">{birthDate}</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">地址</p>
                    <p className="font-bold text-black">
                        {user?.address.city} {user?.address.detail}
                    </p>
                </div>
            </div>
            <Form preventScrollReset>
                <input type="hidden" name="edit" value="basic-info" />
                {hasPasswordField && (
                    <input type="hidden" name="edit" value="reset-password" />
                )}
                <button
                    type="submit"
                    className="mt-6 rounded-lg border border-primary-100 px-8 py-4 font-bold text-primary-100"
                >
                    編輯
                </button>
            </Form>
        </Card>
    );
};

export default BasicInfoField;
