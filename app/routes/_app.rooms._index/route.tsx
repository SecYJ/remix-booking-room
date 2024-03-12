import RoomCard from "./components/RoomCard";
import { rooms } from "./data";

const RoomIndex = () => {
    return (
        <div className="mt-24 min-h-screen">
            <section className="primary-10 py-10">
                <div className="container">
                    <div className="font-bold">
                        <p className="text-sm text-neutral-80">
                            各種房型，任您挑選
                        </p>
                        <h2 className="text-3xl text-primary-100">
                            各種房型，任您挑選
                        </h2>
                    </div>

                    <div className="mt-10 space-y-6">
                        {rooms.map((room) => (
                            <RoomCard room={room} key={room.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoomIndex;
