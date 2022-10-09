export class Product {
    productId: number;
    productName: string;
    cost: number;
    brand: string;

    constructor(productId: number, productName: string, cost: number, brand: string) {
        this.productId = productId;
        this.productName = productName;
        this.cost = cost;
        this.brand = brand;
    }
}
