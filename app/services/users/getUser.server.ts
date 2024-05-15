import { serverApiClient } from "../axios.config";

interface Response {
    status: boolean;
    result: {
        address: {
            zipcode: number;
            detail: string;
            city: string;
            county: string;
        };
        _id: string;
        name: string;
        email: string;
        phone: string;
        birthday: string;
        id: string;
    };
}

export const getUser = async (token: string) => {
    const response = await serverApiClient.get<Response>("/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
