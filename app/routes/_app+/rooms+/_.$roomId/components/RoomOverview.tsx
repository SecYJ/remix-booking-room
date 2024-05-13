import { FiMinus, FiPlus } from "react-icons/fi";
import RoomSection from "~/components/room/RoomSection";
import { amenities, roomEquips, roomSizes, rules } from "../data";
import { Room } from "~/types/room";
import FeatureColumn from "~/components/room/FeatureColumn";

const RoomOverview = ({ room }: { room: Room }) => {
    return (
        <section className="bg-primary-10 py-10 lg:py-30">
            <div className="container lg:grid lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-7 lg:space-y-20">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-black lg:text-5xl">
                            {room.name}
                        </h1>
                        <p className="text-sm font-medium text-neutral-80 lg:text-base">
                            {room.description}
                        </p>
                    </div>

                    <RoomSection title="房型基本資訊">
                        <div className="flex gap-4">
                            <FeatureColumn
                                feature="areaInfo"
                                text={room.areaInfo}
                            />
                            <FeatureColumn
                                feature="bedInfo"
                                text={room.bedInfo}
                            />
                            <FeatureColumn
                                feature="maxPeople"
                                text={`1-${room.maxPeople}人`}
                            />
                        </div>
                    </RoomSection>

                    <RoomSection title="房間格局" list={roomSizes} />
                    <RoomSection title="房內設備" list={roomEquips} />
                    <RoomSection title="備品提供" list={amenities} />

                    <RoomSection title="訂房須知">
                        <ol className="list-decimal space-y-1 pl-5 font-medium text-neutral-80">
                            {rules.map((rule) => (
                                <li key={rule}>{rule}</li>
                            ))}
                        </ol>
                    </RoomSection>
                </div>

                <aside className="sticky top-20 hidden h-fit lg:col-span-full lg:col-start-9 lg:block">
                    <div className="space-y-10 rounded-[1.25rem] bg-white p-10">
                        <p className="border-b border-neutral-40 pb-4 text-2xl text-black">
                            預訂房型
                        </p>

                        <div className="text-neutral-80">
                            <h2 className="mb-2 text-[2.5rem] font-bold">
                                {room.name}
                            </h2>
                            <p className="font-medium">{room.description}</p>
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
