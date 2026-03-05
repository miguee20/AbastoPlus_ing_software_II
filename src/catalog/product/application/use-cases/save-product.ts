import { injectable, inject } from "inversify";
import { Product } from "../../domain/product.js";
import type { ProductRepository } from "../product-repository.js";
import { TYPES } from "../../../../di/types.js";

export interface ProductPrimitives {
    id: string;
    name: string;
    baseUnit: string;
    presentations: Array<{
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        UnitOfMeasure: string;
    }>;
}
@injectable()
export class SaveProduct {
    private readonly repository: ProductRepository;

    constructor(
        @inject(TYPES.ProductRepository) repository: ProductRepository
    ) {
        this.repository = repository;
    }
    public async execute(data: ProductPrimitives): Promise<void> {
        
        const product = Product.build(
            data.id, 
            data.name, 
            data.baseUnit
        );

        if (data.presentations && data.presentations.length > 0) {
            product.loadPresentations(data.presentations);
        }

        await this.repository.save(product);
    }
}