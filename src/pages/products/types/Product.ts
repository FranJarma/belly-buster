import {CategoryEnum} from "./Category";

export interface Product {
    category: CategoryEnum;
    description: string;
    image: string;
    minUnitOfStock: number;
    name: string;
    unitPrice: number;
    readonly nameWithPrice: string;
}
