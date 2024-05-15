import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Banner } from "~/components";
import { getRooms } from "~/services/getRooms";
import RoomCard from "./components/RoomCard";

export const loader = async () => {
    const roomsData = await getRooms();

    return json({
        data: roomsData.result,
    });
};

const RoomIndex = () => {
    const { data: roomsData } = useLoaderData<typeof loader>();

    return (
        <>
            <Banner gap="lg:gap-20">
                <h1 className="whitespace-nowrap text-5xl font-bold">
                    客房旅宿
                </h1>
            </Banner>
            <section className="bg-primary-10 py-10 lg:pb-[10.5rem] lg:pt-30">
                <div className="container">
                    <div className="font-bold">
                        <p className="mb-2 text-sm text-neutral-80 lg:text-xl">
                            房型選擇
                        </p>
                        <h2 className="text-3xl text-primary-100 lg:text-5xl">
                            各種房型，任您挑選
                        </h2>
                    </div>

                    <div className="mt-10 space-y-6 lg:mt-20 lg:space-y-12">
                        {/* <Suspense fallback={<p>Loading...</p>}>
                            <Await resolve={roomsData}>
                                {(roomsData) =>
                                    roomsData.result.map((room) => (
                                        <RoomCard room={room} key={room._id} />
                                    ))
                                }
                            </Await>
                        </Suspense> */}

                        {roomsData.map((room) => (
                            <RoomCard room={room} key={room._id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default RoomIndex;
