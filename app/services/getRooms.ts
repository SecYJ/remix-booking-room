import { Room } from "~/types/room";
import { serverApiClient } from "./axios.config";

interface Response {
    status: string;
    result: Room[]
}

export const getRooms = async () => {
    const response = await serverApiClient.get<Response>("/rooms");
    return response.data;
};
