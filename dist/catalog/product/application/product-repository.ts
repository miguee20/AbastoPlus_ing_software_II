import { Product } from "../domain/product.js";
export interface ProductRepository {
    save(data: Product): Promise<void>;
}