import { ProductId } from "./value-objects/product-id.js";
import { ProductName } from "./value-objects/product-name.js";
import { ProductBaseUnit } from "./value-objects/product-base-unit.js";
import { ProductPresentations } from "./value-objects/product-presentations.js";
export class Product {
    productId;
    productName;
    productBaseUnit;
    productPresentations;
    constructor(id, name, baseUnit, presentations) {
        this.productId = id;
        this.productName = name;
        this.productBaseUnit = baseUnit;
        this.productPresentations = presentations;
    }
    static build(id, name, baseUnit) {
        const productIdVO = new ProductId(id);
        const productNameVO = new ProductName(name);
        const productBaseUnitVO = new ProductBaseUnit(baseUnit);
        const emptyPresentations = new ProductPresentations([]);
        return new Product(productIdVO, productNameVO, productBaseUnitVO, emptyPresentations);
    }
    loadPresentations(rawPresentations) {
        const newPresentations = ProductPresentations.createFromArray(rawPresentations);
        this.productPresentations.items.push(...newPresentations.items);
    }
    toPrimitives() {
        return {
            id: this.productId.toString(),
            name: this.productName.toString(),
            baseUnit: this.productBaseUnit.toString(),
            presentations: this.productPresentations.items.map(p => p.toPrimitives())
        };
    }
}
//# sourceMappingURL=product.js.map