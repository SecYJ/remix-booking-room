import { FaCheck } from "react-icons/fa6";
import RoomSection from "~/components/room/RoomSection";
import { amenities, roomEquips } from "../_app.rooms_.$id/data";

const BookingSuccessPage = () => {
    return (
        <div className="py-10">
            <div className="container grid gap-15 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <div className="grid items-center lg:grid-cols-[auto_1fr] lg:gap-x-10">
                        <div className="grid size-10 place-items-center rounded-full bg-success-100">
                            <FaCheck />
                        </div>

                        <div className="mb-8 mt-4 text-3xl text-white lg:mb-10">
                            <p className="mb-2">恭喜, Jessica!</p>
                            <p>您已預訂成功</p>
                        </div>

                        <p className="text-neutral-40 lg:col-span-full">
                            我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
                        </p>
                    </div>

                    <div className="my-10 border-y border-neutral-40 py-10 font-bold text-white lg:my-20 lg:py-20">
                        <p>立即查看你的訂單紀錄</p>
                        <button
                            type="button"
                            className="mt-6 block w-full rounded-lg bg-primary-100 py-4 lg:mt-10 lg:w-auto lg:px-15"
                        >
                            前往我的訂單
                        </button>
                    </div>

                    <div className="text-white">
                        <h2 className="mb-8 text-2xl lg:mb-10">訂房人資訊</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="mb-2 font-medium text-neutral-40">
                                    姓名
                                </p>
                                <p className="font-bold">Jessica Wang</p>
                            </div>
                            <div>
                                <p className="mb-2 font-medium text-neutral-40">
                                    手機號碼
                                </p>
                                <p className="font-bold">+886 912 345 678</p>
                            </div>
                            <div>
                                <p className="mb-2 font-medium text-neutral-40">
                                    電子信箱
                                </p>
                                <p className="font-bold">jessica@sample.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="lg:col-span-full lg:col-start-8">
                    <div className="space-y-6 rounded-3xl bg-white p-4">
                        <div>
                            <p className="mb-2 text-sm font-medium text-neutral-80">
                                預訂參考編號： HH2302183151222
                            </p>
                            <p className="font-bold text-black">即將來的行程</p>
                        </div>

                        <img
                            src="/assets/mobile/room2-1.png"
                            className="rounded-lg"
                            alt=""
                        />

                        <div className="text-sm font-bold text-neutral-80">
                            <span className="mr-4 border-r border-neutral-60 pr-4">
                                尊爵雙人房, 1 晚
                            </span>
                            <span>住宿人數: 2 位</span>
                        </div>

                        <div className="text-neutral-80">
                            <div className="mb-2 flex items-center gap-3">
                                <span className="h-6 w-1 rounded-xl bg-primary-100" />
                                <span>
                                    入住: 6 月 10 日星期二, 15:00 可入住
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="h-6 w-1 rounded-xl bg-primary-100" />
                                <span>
                                    退房: 6 月 11 日星期三, 12:00 前退房
                                </span>
                            </div>
                        </div>

                        <strong className="block text-sm text-neutral-80">
                            NT$ 10,000
                        </strong>

                        <div className="h-px bg-neutral-40" />

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
                </aside>
            </div>
        </div>
    );
};

export default BookingSuccessPage;
