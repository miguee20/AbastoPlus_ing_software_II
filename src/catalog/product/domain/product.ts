import { ProductId } from "./value-objects/product-id.js";
import { ProductName } from "./value-objects/product-name.js";
import { ProductBaseUnit } from "./value-objects/product-base-unit.js";
import { ProductPresentations } from "./value-objects/product-presentations.js";

export class Product {
    private readonly productId: ProductId;
    private readonly productName: ProductName;
    private readonly productBaseUnit: ProductBaseUnit;
    private readonly productPresentations: ProductPresentations;

    private constructor(
        id: ProductId, 
        name: ProductName, 
        baseUnit: ProductBaseUnit,
        presentations: ProductPresentations 
    ) {
        this.productId = id;
        this.productName = name;
        this.productBaseUnit = baseUnit;
        this.productPresentations = presentations; 
    }

    public static build(id: string, name: string, baseUnit: string): Product {
        const productIdVO = new ProductId(id);
        const productNameVO = new ProductName(name);
        const productBaseUnitVO = new ProductBaseUnit(baseUnit);
        const emptyPresentations = new ProductPresentations([]);

        return new Product(productIdVO, productNameVO, productBaseUnitVO, emptyPresentations);
    }

    public loadPresentations(rawPresentations: Array<{
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        UnitOfMeasure: string;
    }>): void {
        const newPresentations = ProductPresentations.createFromArray(rawPresentations);
        
        this.productPresentations.items.push(...newPresentations.items);
    }
    
public toPrimitives() {
        return {
            id: this.productId.toString(),
            name: this.productName.toString(),
            baseUnit: this.productBaseUnit.toString(),
            presentations: this.productPresentations.items.map(p => p.toPrimitives())
        };
    }
    
}