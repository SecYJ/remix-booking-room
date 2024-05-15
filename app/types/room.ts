export interface ProvidedItem {
    title: string;
    isProvide: true;
}

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
    layoutInfo: ProvidedItem[];
    facilityInfo: ProvidedItem[];
    amenityInfo: ProvidedItem[];
}
