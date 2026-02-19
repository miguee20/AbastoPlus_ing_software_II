import { ProductId } from "./value-objects/product-id.js";
import { ProductName } from "./value-objects/product-name.js";
import { ProductBaseUnit } from "./value-objects/product-base-unit.js";

export class Product {
    private readonly productId: ProductId;
    private readonly productName: ProductName;
    private readonly productBaseUnit: ProductBaseUnit;

    private constructor(id: ProductId, name: ProductName, baseUnit: ProductBaseUnit) {
        this.productId = id;
        this.productName = name;
        this.productBaseUnit = baseUnit;
    }

    public static build(id: string, name: string, baseUnit: string): Product {
        const productIdVO = new ProductId(id);
        const productNameVO = new ProductName(name);
        const productBaseUnitVO = new ProductBaseUnit(baseUnit);
        return new Product(productIdVO, productNameVO, productBaseUnitVO);
    }
}