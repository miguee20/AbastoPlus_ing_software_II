import type { ProductRepository } from "../application/product-repository.js";
import { Product } from "../domain/product.js";
export declare class MongoProductRepository implements ProductRepository {
    save(data: Product): Promise<void>;
}
//# sourceMappingURL=MongoProductRepository.d.ts.map