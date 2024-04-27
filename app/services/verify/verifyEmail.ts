import { serverApiClient } from "../axios.config";

type Response =
    | {
          status: true;
          result: {
              isEmailExists: boolean;
          };
      }
    | {
          status: false;
          message: string;
      };

export const verifyEmail = async (email: string) => {
    const response = await serverApiClient.post<Response>("/verify/email", {
        email,
    });
    return response.data;
};
