import { Form } from "@remix-run/react";
import Card from "./Card";

interface Props {
    isEditing: boolean;
    hasBasicInfoField: boolean;
}

const PasswordField = ({ isEditing, hasBasicInfoField }: Props) => {
    return isEditing ? (
        <Card title="修改帳號資料">
            <Form>
                <div className="space-y-4">
                    <div className="text-sm">
                        <div className="mb-2 font-medium text-neutral-80">
                            電子信箱
                        </div>
                        <p className="font-bold text-black">
                            Jessica@exsample.com
                        </p>
                    </div>

                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            舊密碼
                        </label>
                        <input
                            className="rounded-lg border border-neutral-40 p-4 font-medium placeholder-neutral-60"
                            type="password"
                            placeholder="請輸入舊密碼"
                        />
                    </div>

                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            新密碼
                        </label>
                        <input
                            className="rounded-lg border border-neutral-40 p-4 font-medium placeholder-neutral-60"
                            type="password"
                            placeholder="請輸入新密碼"
                        />
                    </div>
                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            確認新密碼
                        </label>
                        <input
                            className="rounded-lg border border-neutral-40 p-4 font-medium placeholder-neutral-60"
                            type="password"
                            placeholder="請再輸入一次新密碼"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-neutral-40 px-8 py-4 text-neutral-60 lg:w-auto"
                >
                    儲存設定
                </button>
            </Form>
        </Card>
    ) : (
        <Card title="修改密碼">
            <div className="mb-4 text-sm lg:mb-6 lg:text-base">
                <p className="mb-2 font-medium text-neutral-80">電子信箱</p>
                <p className="font-bold text-black">Jessica@exsample.com</p>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-2">
                <p className="text-sm font-medium text-neutral-80 lg:text-base">
                    密碼
                </p>
                <Form
                    preventScrollReset
                    className="row-span-2 font-bold text-primary-100"
                >
                    <input type="hidden" name="edit" value="reset-password" />
                    {hasBasicInfoField && (
                        <input type="hidden" name="edit" value="basic-info" />
                    )}
                    <button type="submit">重設</button>
                </Form>
                <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, index) => (
                        <div
                            className="size-2 rounded-full bg-black"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default PasswordField;
