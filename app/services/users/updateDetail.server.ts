import { serverApiClient } from "../axios.config";

interface Details {
    userId: string;
    name: string;
    phone: string;
    birthday: string;
    address: {
        zipcode: number;
        detail: string;
    };
    oldPassword: string;
    newPassword: string;
}

export const updateDetail = async (body: Partial<Details>, token: string) => {
    const response = await serverApiClient.put("/user", body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
