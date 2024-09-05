import {CategoryEnum, Product} from "../types";

export const products: Product[] = [
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 10,
        name: "Belly American Doble",
        unitPrice: 8500,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 20,
        name: "Belly American Triple",
        unitPrice: 9100,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 30,
        name: "Belly Crispy Doble",
        unitPrice: 8200,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 40,
        name: "Belly Crispy Triple",
        unitPrice: 8800,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 50,
        name: "Belly Mex Doble",
        unitPrice: 8800,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.BURGERS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 60,
        name: "Belly Mex Triple",
        unitPrice: 9500,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.HOT_DOGS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 70,
        name: "Belly Californian Dog",
        unitPrice: 6700,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.HOT_DOGS,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 80,
        name: "Belly Chicago Dog",
        unitPrice: 6800,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.SIDES,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 90,
        name: "Belly Chilly Fries",
        unitPrice: 5200,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
    {
        category: CategoryEnum.SIDES,
        description: "Descripción del producto",
        image: "https://via.placeholder.com/150",
        minUnitOfStock: 100,
        name: "Belly Onion Rings",
        unitPrice: 6600,
        get nameWithPrice() {
            return `${this.name} - $${this.unitPrice}`;
        },
    },
];

export const groupedProducts = Object.values(CategoryEnum)
    .map((category) => ({
        category,
        items: products.filter((product) => product.category === category),
    }))
    .filter((group) => group.items.length > 0);
