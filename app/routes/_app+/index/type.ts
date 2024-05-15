import { ApiResponse } from "~/types/api";

export interface NewsResponse {
    _id: string;
    title: string;
    image: string;
    description: string;
}

export interface CulinaryResponse {
    title: string;
    description: string;
    image: string;
    _id: string;
    diningTime: string;
}

export interface LatestNews extends ApiResponse<NewsResponse[]> {}

export interface Culinary extends ApiResponse<CulinaryResponse[]> {}
