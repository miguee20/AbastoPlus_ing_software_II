import { Product } from "../domain/product.js";
import { ProductModel } from "./MongoProductModel.js";
export class MongoProductRepository {
    async save(product) {
        const rawData = product.toPrimitives();
        try {
            await ProductModel.create({
                _id: rawData.id,
                name: rawData.name,
                baseUnit: rawData.baseUnit,
                presentations: rawData.presentations
            });
            console.log(`[MongoDB]: Producto "${rawData.name}" guardado exitosamente.`);
        }
        catch (error) {
            console.error(`[MongoDB]: Error al guardar el producto: ${error.message}`);
            throw new Error("Error de infraestructura al guardar en base de datos");
        }
    }
}
//# sourceMappingURL=MongoProductRepository.js.map