import { Form } from "@remix-run/react";
import Card from "./Card";

interface Props {
    isEditing: boolean;
    hasPasswordField: boolean;
}

const BasicInfoField = ({ isEditing, hasPasswordField }: Props) => {
    return isEditing ? (
        <Card title="基本資料">
            <Form method="POST" id="form" className="space-y-4 lg:space-y-6">
                <div className="grid gap-2">
                    <label
                        htmlFor="1"
                        className="text-sm font-bold text-black lg:text-base"
                    >
                        姓名
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="請輸入姓名"
                        className="rounded-lg border border-neutral-40 p-4 text-black placeholder-neutral-60"
                    />
                </div>
                <div className="grid gap-2">
                    <label
                        htmlFor="1"
                        className="text-sm font-bold text-black lg:text-base"
                    >
                        手機號碼
                    </label>
                    <input
                        type="text"
                        placeholder="請輸入手機號碼"
                        className="rounded-lg border border-neutral-40 p-4 text-black placeholder-neutral-60"
                    />
                </div>
                <div className="grid gap-2">
                    <label
                        htmlFor="1"
                        className="text-sm font-bold text-black lg:text-base"
                    >
                        生日
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        <select className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80">
                            {Array.from({ length: 10 }, (_, index) => (
                                <option value={1990 + index} key={index}>
                                    {1990 + index}
                                </option>
                            ))}
                        </select>
                        <select className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80">
                            {Array.from({ length: 12 }, (_, index) => (
                                <option value={1 + index} key={index}>
                                    {1 + index}
                                </option>
                            ))}
                        </select>
                        <select className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80">
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
                    <select className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80">
                        <option value="高雄市">高雄市</option>
                        <option value="台北市">台北市</option>
                        <option value="新竹市">新竹市</option>
                    </select>
                    <select className="rounded-lg border border-neutral-40 bg-transparent p-4 text-neutral-80">
                        <option value="新興區">新興區</option>
                        <option value="屏东區">屏东區</option>
                        <option value="花莲區">花莲區</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="請輸入詳細地址"
                    className="w-full rounded-lg border border-neutral-40 p-4 text-black placeholder-neutral-60"
                />
            </Form>

            <button
                form="form"
                type="submit"
                name="_action"
                value="save-basic-info"
                className="mt-6 w-full rounded-lg bg-neutral-40 px-8 py-4 text-neutral-60 lg:w-auto"
            >
                儲存設定
            </button>
        </Card>
    ) : (
        <Card title="基本資料">
            <div className="space-y-4 *:text-sm lg:*:mb-6 lg:*:text-base">
                <div>
                    <p className="mb-2 font-medium text-neutral-80">姓名</p>
                    <p className="font-bold text-black">Jessica Wang</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">手機號碼</p>
                    <p className="font-bold text-black">+886 912 345 678</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">生日</p>
                    <p className="font-bold text-black">1990 年 8 月 15 日</p>
                </div>
                <div>
                    <p className="mb-2 font-medium text-neutral-80">地址</p>
                    <p className="font-bold text-black">
                        高雄市新興區六角路 123 號
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
