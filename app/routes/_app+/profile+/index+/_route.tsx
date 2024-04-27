import { Form } from "@remix-run/react";
import Card from "./Card";

const ProfileIndex = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
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
                        className="mt-6 w-full rounded-lg bg-neutral-40 py-4 text-neutral-60"
                    >
                        儲存設定
                    </button>
                </Form>
            </Card>

            <Card title="基本資料">
                <Form className="space-y-6">
                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            姓名
                        </label>
                        <input
                            className="rounded-lg border border-neutral-40 p-4 font-medium placeholder-neutral-60"
                            type="password"
                            placeholder="請輸入姓名"
                        />
                    </div>
                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            手機號碼
                        </label>
                        <input
                            className="rounded-lg border border-neutral-40 p-4 font-medium placeholder-neutral-60"
                            type="password"
                            placeholder="請輸入手機號碼"
                        />
                    </div>
                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            生日
                        </label>
                        <div className="flex gap-2 *:flex-1">
                            <select>
                                <option value="1990">1990</option>
                            </select>
                            <select>
                                <option value="8">8</option>
                            </select>
                            <select>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-2 text-sm">
                        <label
                            htmlFor="old-password"
                            className="font-bold text-black"
                        >
                            地址
                        </label>
                        <div className="flex gap-2 *:flex-1">
                            <select>
                                <option value="高雄市">高雄市</option>
                            </select>
                            <select>
                                <option value="新興區">新興區</option>
                            </select>
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="請輸入詳細地址"
                        className="w-full rounded-lg border border-neutral-40 p-4 text-sm font-medium placeholder-neutral-60"
                    />

                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-neutral-40 py-4 font-bold text-neutral-60"
                    >
                        儲存設定
                    </button>
                </Form>
            </Card>
        </div>
    );
};

export default ProfileIndex;
