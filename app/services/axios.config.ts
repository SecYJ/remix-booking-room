import axios from "axios";

export const serverApiClient = axios.create({
    baseURL: "https://fork-hotel-api.onrender.com/api/v1",
});
