export declare class Product {
    private readonly productId;
    private readonly productName;
    private readonly productBaseUnit;
    private readonly productPresentations;
    private constructor();
    static build(id: string, name: string, baseUnit: string): Product;
    loadPresentations(rawPresentations: Array<{
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        UnitOfMeasure: string;
    }>): void;
}