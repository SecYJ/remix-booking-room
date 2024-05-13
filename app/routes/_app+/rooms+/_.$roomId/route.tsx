import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import RoomGallery from "./components/RoomGallery";
import RoomOverview from "./components/RoomOverview";
import { getSingleRoom } from "~/services/getSingleRoom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const roomData = await getSingleRoom(params.roomId as string);

    console.log("roomData", roomData);

    return json({
        status: "success",
        data: roomData.result,
    });
};

const RoomPage = () => {
    const { data: roomData} = useLoaderData<typeof loader>();


    return (
        <>
            <RoomGallery />
            <RoomOverview room={roomData} />
        </>
    );
};

export default RoomPage;
