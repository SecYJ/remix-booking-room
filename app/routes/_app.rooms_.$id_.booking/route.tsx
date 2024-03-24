import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Form } from "@remix-run/react";
import { IoChevronBackSharp } from "react-icons/io5";
import BaseDataGrid from "~/components/room/BaseDataGrid";
import RoomSection from "~/components/room/RoomSection";
import { amenities, roomEquips, roomSizes } from "../_app.rooms_.$id/data";
import { schema } from "./schema";

const BookingPage = () => {
    const [form, fields] = useForm({
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        onValidate({ formData }) {
            return parseWithZod(formData, { schema });
        },
    });

    return (
        <div className="bg-primary-10 py-10">
            <div className="container grid gap-10 lg:grid-cols-12 lg:gap-18">
                <div className="lg:col-span-7">
                    <div className="mb-10 flex items-center gap-2">
                        <button type="button">
                            <IoChevronBackSharp className="size-6 text-black" />
                        </button>
                        <h1 className="text-2xl font-bold text-black">
                            確認訂房資訊
                        </h1>
                    </div>
                    <div className="mb-10 space-y-6 border-b border-neutral-60 pb-10">
                        <section className="grid grid-cols-[1fr_auto] items-center text-black">
                            <h2 className="mb-2 flex items-center gap-3">
                                <span className="h-6 w-1 rounded-[.75rem] bg-primary-100" />
                                <span className="font-bold">選擇房型</span>
                            </h2>

                            <button
                                type="button"
                                className="row-span-2 font-bold"
                            >
                                編輯
                            </button>
                            <p className="font-medium">尊爵雙人房</p>
                        </section>
                        <section className="grid grid-cols-[1fr_auto] items-center text-black">
                            <h2 className="mb-2 flex items-center gap-3">
                                <span className="h-6 w-1 rounded-[.75rem] bg-primary-100" />
                                <span className="font-bold">訂房日期</span>
                            </h2>

                            <button
                                type="button"
                                className="row-span-2 font-bold"
                            >
                                編輯
                            </button>
                            <div className="font-medium">
                                <p className="mb-2">入住: 6 月 10 日星期二</p>
                                <p>退房: 6 月 11 日星期三</p>
                            </div>
                        </section>
                        <section className="grid grid-cols-[1fr_auto] items-center text-black">
                            <h2 className="mb-2 flex items-center gap-3">
                                <span className="h-6 w-1 rounded-[.75rem] bg-primary-100" />
                                <span className="font-bold">訂房日期</span>
                            </h2>

                            <button
                                type="button"
                                className="row-span-2 font-bold"
                            >
                                編輯
                            </button>
                            <p className="font-medium">2 人</p>
                        </section>
                    </div>

                    <div>
                        <h2 className="mb-8 text-xl font-bold text-black">
                            訂房人資訊
                        </h2>
                        <Form
                            id={form.id}
                            method="post"
                            className="space-y-6"
                            onSubmit={form.onSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="asdf"
                                    className="block text-sm font-bold text-black"
                                >
                                    姓名
                                </label>
                                <input
                                    type="text"
                                    placeholder="請輸入姓名"
                                    autoComplete="off"
                                    name={fields.username.name}
                                    className="font-sm mb-1 mt-2 w-full rounded-lg border border-neutral-40 bg-white p-4 font-medium text-black placeholder-neutral-40 outline-none focus:shadow-md"
                                />
                                <p className="text-xs text-red-600">
                                    {fields.username.errors}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="asdf"
                                    className="block text-sm font-bold text-black"
                                >
                                    手機號碼
                                </label>
                                <input
                                    type="text"
                                    placeholder="請輸入手機號碼"
                                    autoComplete="off"
                                    name={fields.phoneNum.name}
                                    className="font-sm mb-1 mt-2 w-full rounded-lg border border-neutral-40 bg-white p-4 font-medium text-black placeholder-neutral-40 outline-none focus:shadow-md"
                                />
                                <p className="text-xs text-red-600">
                                    {fields.phoneNum.errors?.[0]}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="asdf"
                                    className="block text-sm font-bold text-black"
                                >
                                    電子信箱
                                </label>
                                <input
                                    type="text"
                                    placeholder="請輸入電子信箱"
                                    autoComplete="off"
                                    name={fields.email.name}
                                    className="font-sm mb-1 mt-2 w-full rounded-lg border border-neutral-40 bg-white p-4 font-medium text-black placeholder-neutral-40 outline-none focus:shadow-md"
                                />
                                <p className="text-xs text-red-600">
                                    {fields.email.errors?.[0]}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="asdf"
                                    className="mb-2 block text-sm font-bold text-black"
                                >
                                    生日
                                </label>

                                <div className="grid grid-cols-3 gap-2">
                                    <select className="rounded-lg bg-white p-4 text-neutral-80">
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                    </select>
                                    <select className="rounded-lg bg-white p-4 text-neutral-80">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    <select className="rounded-lg bg-white p-4 text-neutral-80">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="asdf"
                                    className="mb-2 block text-sm font-bold text-black"
                                >
                                    生日
                                </label>

                                <div className="grid grid-cols-2 gap-2">
                                    <select className="rounded-lg bg-white p-4 text-neutral-80">
                                        <option value="高雄市">高雄市</option>
                                    </select>
                                    <select className="rounded-lg bg-white p-4 text-neutral-80">
                                        <option value="新興區">新興區</option>
                                    </select>
                                </div>

                                {/* <input
                                    type="text"
                                    placeholder="請輸入電子信箱"
                                    autoComplete="off"
                                    name={fields.email.name}
                                    className="font-sm mb-1 mt-2 w-full rounded-lg border border-neutral-40 bg-white p-4 font-medium text-black placeholder-neutral-40 outline-none focus:shadow-md"
                                />
                                <p className="text-xs text-red-600">
                                    {fields.email.errors?.[0]}
                                </p> */}
                            </div>

                            <div className="mb-10 border-b border-neutral-60 pb-10">
                                <input
                                    type="text"
                                    placeholder="請輸入詳細地址"
                                    className="w-full rounded-lg border border-neutral-40 bg-white p-4 font-medium text-black placeholder-neutral-40 outline-none focus:shadow-md"
                                    name={fields.address.name}
                                />
                                <p className="text-xs text-red-600">
                                    {fields.address.errors?.[0]}
                                </p>
                            </div>
                        </Form>
                    </div>

                    <div>
                        <h2 className="mb-8 text-xl font-bold text-black">
                            房間資訊
                        </h2>

                        <RoomSection title="房型基本資訊">
                            <BaseDataGrid
                                data={["24坪", "1 張大床", "2-4 人"]}
                            />
                        </RoomSection>

                        <RoomSection
                            title="房間格局"
                            column={3}
                            list={roomSizes}
                        />
                        <RoomSection
                            title="房內設備"
                            column={2}
                            list={roomEquips}
                        />
                        <RoomSection
                            title="備品提供"
                            column={2}
                            list={amenities}
                        />
                    </div>
                </div>

                <aside className="top-20 h-fit lg:sticky lg:col-span-full lg:col-start-8">
                    <div className="space-y-6 rounded-lg bg-white p-6">
                        <img
                            src="/assets/mobile/room2-1.png"
                            alt=""
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-bold text-black">
                            價格詳情
                        </h3>
                        <div className="font-medium">
                            <div className="grid grid-cols-[auto_auto_1fr_auto] gap-2">
                                <strong className="text-black">
                                    NT$ 10,000
                                </strong>
                                <p className="text-neutral-80">X</p>
                                <p className="text-neutral-80">2 晚</p>
                                <div className="text-black">NT$ 20,000</div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-black">住宿折扣</p>
                                <strong className="text-primary-100">
                                    {"-NT$ 1,000"}
                                </strong>
                            </div>
                        </div>

                        <div className="h-px bg-primary-40" />
                        <div className="flex justify-between font-bold text-black">
                            <p>總價</p>
                            <strong>NT$ 19,000</strong>
                        </div>

                        <button
                            type="button"
                            className="w-full rounded-lg bg-primary-100 py-4 font-bold"
                        >
                            確認訂房
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BookingPage;
