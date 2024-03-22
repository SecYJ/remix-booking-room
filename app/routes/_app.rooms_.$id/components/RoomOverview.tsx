import { FiMinus, FiPlus } from "react-icons/fi";
import BaseDataGrid from "~/components/room/BaseDataGrid";
import RoomSection from "~/components/room/RoomSection";
import { amenities, roomEquips, roomSizes, rules } from "../data";

const RoomOverview = () => {
    return (
        <section className="bg-primary-10 py-10 lg:py-30">
            <div className="container lg:grid lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-7 lg:space-y-20">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-black lg:text-5xl">
                            尊爵雙人房
                        </h1>
                        <p className="text-sm font-medium text-neutral-80 lg:text-base">
                            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                        </p>
                    </div>

                    <RoomSection title="房型基本資訊">
                        <BaseDataGrid data={["24坪", "1 張大床", "2-4 人"]} />
                    </RoomSection>

                    <RoomSection title="房間格局" column={3} list={roomSizes} />
                    <RoomSection
                        title="房內設備"
                        column={2}
                        list={roomEquips}
                    />
                    <RoomSection title="備品提供" column={2} list={amenities} />

                    <RoomSection title="訂房須知">
                        <ol className="list-decimal space-y-1 pl-5 font-medium text-neutral-80">
                            {rules.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ol>
                    </RoomSection>
                </div>

                <aside className="sticky hidden lg:block top-20 h-fit lg:col-span-full lg:col-start-9">
                    <div className="space-y-10 rounded-[1.25rem] bg-white p-10">
                        <p className="border-b border-neutral-40 pb-4 text-2xl text-black">
                            預訂房型
                        </p>

                        <div className="text-neutral-80">
                            <h2 className="mb-2 text-[2.5rem] font-bold">
                                尊爵雙人房
                            </h2>
                            <p className="font-medium">
                                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                            </p>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-2 text-neutral-80 *:rounded-lg *:border *:border-black *:p-4">
                                <div className="font-medium">
                                    <p className="text-sm text-neutral-80">
                                        入住
                                    </p>
                                    <p className="text-black">2023 / 12 / 03</p>
                                </div>
                                <div className="font-medium">
                                    <p className="text-sm text-neutral-80">
                                        退房
                                    </p>
                                    <p className="text-black">2023 / 12 / 04</p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-[1fr_repeat(3,auto)] items-center gap-4 font-bold text-black">
                                <p>人數</p>
                                <button
                                    type="button"
                                    className="grid size-14 place-items-center rounded-full border border-neutral-40"
                                >
                                    <FiMinus />
                                </button>
                                <p className="text-xl">2</p>
                                <button
                                    type="button"
                                    className="grid size-14 place-items-center rounded-full border border-neutral-40"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        <strong className="text-2xl text-primary-100">
                            NT$ 10,000
                        </strong>

                        <button
                            type="button"
                            className="block w-full rounded-lg bg-primary-100 py-4 text-center text-white"
                        >
                            立即預訂
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default RoomOverview;
