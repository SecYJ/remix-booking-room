import RoomSection from "~/components/room/RoomSection";
import { amenities, roomEquips } from "../_app.rooms_.$id/data";
import Card from "./components/Card";
import { Outlet } from "@remix-run/react";

const OrderPage = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
            <Card title="即將來的行程" referenceNumber="HH2302183151222">
                <div className="space-y-6">
                    <img
                        className="rounded-lg"
                        src="/assets/mobile/room2-1.png"
                        alt=""
                    />
                    <div className="flex text-sm font-bold text-neutral-80">
                        <p className="mr-4 border-r border-neutral-60 pr-4">
                            尊絕雙人房, 1 晚
                        </p>
                        <p>住宿人數: 2 位</p>
                    </div>

                    <ul className="text-sm font-bold text-neutral-80">
                        <li className="mb-2 flex gap-3">
                            <span className="h-6 w-1 rounded-lg bg-primary-100" />
                            <p>入住: 6 月 10 日星期二, 15:00 可入住</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-6 w-1 rounded-lg bg-primary-100" />
                            <p>退房: 6 月 11 日星期三, 12:00 前退房</p>
                        </li>
                    </ul>

                    <strong className="text-sm font-bold text-neutral-80">
                        NT$ 10,000
                    </strong>

                    <div className="h-px bg-primary-40" />

                    <RoomSection
                        title="房內設備"
                        column={2}
                        list={roomEquips}
                    />

                    <RoomSection title="房內設備" column={2} list={amenities} />

                    <div className="grid grid-cols-2 gap-4 *:rounded-lg *:border *:py-4 *:font-bold">
                        <button
                            type="button"
                            className="border-primary-100 bg-white text-primary-100"
                        >
                            取消預訂
                        </button>
                        <button
                            type="button"
                            className="bg-primary-100 text-white"
                        >
                            查看詳情
                        </button>
                    </div>
                </div>
            </Card>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default OrderPage;
