export interface CollectPoint {
    _id: string;
    address: string;
    city: string;
    zipcode: string;
    department: string;
}

export interface CreateCollectPoint {
    address: string;
    city: string;
    zipcode: string;
    department: string;
}
