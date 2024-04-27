import { serverApiClient } from "../axios.config";

interface Response {
    status: boolean;
    token: string;
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

interface RequestBody {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    address: {
        zipcode: number;
        detail: string;
    };
}

export const register = async (body: RequestBody) => {
    const response = await serverApiClient.post<Response>("/user/signup", body);
    return response.data;
};
