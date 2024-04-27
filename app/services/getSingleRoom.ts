import { Room } from "~/types/room";
import { serverApiClient } from "./axios.config";

interface Response {
    status: string;
    result: Room;
}

export const getSingleRoom = async (roomId: string) => {
    const response = await serverApiClient.get<Response>(`/rooms/${roomId}`);
    return response.data;
};
