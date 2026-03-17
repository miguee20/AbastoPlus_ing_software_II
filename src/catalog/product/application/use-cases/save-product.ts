import { Product } from "../../domain/product.js";
import type { TranslatorService } from "../ports/TranslatorService.js";
import type { ProductRepository } from "../product-repository.js";


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

export class SaveProduct {
    private readonly repository: ProductRepository;
    private readonly translator: TranslatorService;


    constructor(repository: ProductRepository, transalator: TranslatorService) {
        this.repository = repository;
        this.translator = transalator;
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