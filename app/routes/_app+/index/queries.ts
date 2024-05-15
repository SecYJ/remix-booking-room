import { serverApiClient } from "~/services/axios.config";
import { Culinary, LatestNews } from "./type";

export const getNews = async () => {
    const response = await serverApiClient.get<LatestNews>("/home/news");
    return response.data;
};

export const getCulinaries = async () => {
    const response = await serverApiClient.get<Culinary>("/home/culinary");
    return response.data;
};
