export interface CollectPoint {
    _id: string;
    address: string;
    city: string;
    zipcode: string;
}

export interface CreateCollectPoint {
    address: string;
    city: string;
    zipcode: string;
}