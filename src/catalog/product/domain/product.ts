import { ProductId } from "./value-objects/product-id.js";
import { ProductName } from "./value-objects/product-name.js";
import { ProductBaseUnit } from "./value-objects/product-base-unit.js";

export class Product {
    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly baseUnit: ProductBaseUnit
    ) {}
}