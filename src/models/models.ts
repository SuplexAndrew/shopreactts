export interface Producer {
    id: number;
    name: string;
    phoneNumber: number;
}

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    image?: string;
}

/*export interface Product {
    id: number;
    name: string;
    price: number;
    info: [string, string][];
    composition: string;
    nutrVal?: [string, string][];
    characteristics?: [string, string][];
    storageConditions?: [string, string][];
    properties?: [string, string][];
    image?: string;
    category: Category;
}*/