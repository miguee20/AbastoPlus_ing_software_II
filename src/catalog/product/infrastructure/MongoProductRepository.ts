import type { ProductRepository } from "../application/product-repository.js";
import { Product } from "../domain/product.js";
import { ProductModel } from "./MongoProductModel.js";

export class MongoProductRepository implements ProductRepository {
    
    public async save(product: Product): Promise<void> {
        const rawData = product.toPrimitives();

        try {
            await ProductModel.create({
                _id: rawData.id,
                name: rawData.name,
                baseUnit: rawData.baseUnit,
                presentations: rawData.presentations
            });
            console.log(`[MongoDB]: Producto "${rawData.name}" guardado exitosamente.`);
        } catch (error: any) {
            console.error(`[MongoDB]: Error al guardar el producto: ${error.message}`);
            throw new Error("Error de infraestructura al guardar en base de datos");
        }
    }
}