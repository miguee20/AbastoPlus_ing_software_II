// src/catalog/product/domain/value-objects/Product-presentations.ts
import { Presentation } from "../entities/presentation.js";

export class ProductPresentations {
    
    private readonly values: Presentation[]; 

    constructor(presentations: Presentation[]) {
        this.values = presentations;
    }
    public static createFromArray(
        presentations: Array<{
            id: string;
            name: string;
            type: string;
            netQuantity: number;
            UnitOfMeasure: string;
        }>
    ): ProductPresentations {
        const presentationEntities = presentations.map(item => 
            Presentation.build(
                item.id,
                item.name,
                item.type,
                item.netQuantity,
                item.UnitOfMeasure
            )
        );
        
        return new ProductPresentations(presentationEntities);
    }

    public get items(): Presentation[] {
        return this.values;
    }
}