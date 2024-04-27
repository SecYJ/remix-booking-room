import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import RoomGallery from "./components/RoomGallery";
import RoomOverview from "./components/RoomOverview";
import { getSingleRoom } from "~/services/getSingleRoom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { roomId } = params;

    if (!roomId) return "";

    const roomData = await getSingleRoom(roomId);

    return json({
        status: "success",
        data: roomData.result,
    });
};

const RoomPage = () => {
    const roomData = useLoaderData<typeof loader>();

    console.log(roomData);

    return (
        <>
            <RoomGallery />
            <RoomOverview room={roomData} />
        </>
    );
};

export default RoomPage;
