import BaseDataGrid from "~/components/room/BaseDataGrid";
import RoomSection from "~/components/room/RoomSection";

const RoomOverview = () => {
    return (
        <section className="bg-primary-10 py-10">
            <div className="container">
                <div className="space-y-6">
                    <div>
                        <h1 className="mb-4 text-3xl font-bold text-black">
                            尊爵雙人房
                        </h1>
                        <p className="text-sm font-medium text-neutral-80">
                            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                        </p>
                    </div>

                    <RoomSection title="房型基本資訊">
                        <BaseDataGrid data={["24坪", "1 張大床", "2-4 人"]} />
                    </RoomSection>

                    <RoomSection title="房間格局" list={["市景"]} />
                    <RoomSection title="房內設備" list={["市景"]} />
                    <RoomSection title="備品提供" list={["市景"]} />
                </div>
            </div>
        </section>
    );
};

export default RoomOverview;
