import { Presentation } from "../entities/presentation.js";
export declare class ProductPresentations {
    private readonly values;
    constructor(presentations: Presentation[]);
    static createFromArray(presentations: Array<{
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        UnitOfMeasure: string;
    }>): ProductPresentations;
    get items(): Presentation[];
}
//# sourceMappingURL=product-presentations.d.ts.map