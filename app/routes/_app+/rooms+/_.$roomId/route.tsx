import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import RoomOverview from "./components/RoomOverview";
import { getSingleRoom } from "~/services/getSingleRoom";
import DesktopGallery from "./components/DesktopGallery";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const roomData = await getSingleRoom(params.roomId as string);

    return json({
        status: "success",
        data: roomData.result,
    });
};

const RoomPage = () => {
    const { data: roomData } = useLoaderData<typeof loader>();

    return (
        <>
            <DesktopGallery gallery={roomData.imageUrlList} />
            <RoomOverview room={roomData} />
        </>
    );
};

export default RoomPage;
