export interface Room {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageUrlList: string[];
    areaInfo: string;
    bedInfo: string;
    maxPeople: number;
    price: number;
    status: number;
    layoutInfo: string[];
    facilityInfo: string[];
    amenityInfo: string[];
}
