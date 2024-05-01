import { serverApiClient } from "../axios.config";

interface Response {
    status: boolean;
    token: string;
    result: {
        address: {
            zipcode: number;
            detail: string;
            county: string;
            city: string;
        };
        _id: string;
        name: string;
        email: string;
        phone: string;
        birthday: string;
        createdAt: string;
        updatedAt: string;
        id: string;
    };
}

export const login = async (email: string, password: string) => {
    const response = await serverApiClient.post<Response>("/user/login", {
        email,
        password,
    });

    return response.data;
};
