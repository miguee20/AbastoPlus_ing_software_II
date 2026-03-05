import "reflect-metadata";
import mongoose from "mongoose";
import { container } from "./di/inversify.config.js";
import { TYPES } from "./di/types.js";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product.js";
const MONGO_URI = "mongodb://127.0.0.1:27017/abasto_plus";
const runTests = async () => {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");
        console.log("\n--- INICIANDO PRUEBA CON CASO DE USO ---");
        const saveProduct = container.get(TYPES.SaveProduct);
        await saveProduct.execute({
            id: "550e8401-e39b-41d8-a116-446615440000",
            name: "Atole de arroz Xela",
            baseUnit: "lt",
            presentations: [
                {
                    id: "123e4247-e89b-12d3-a456-426414174001",
                    name: "Jarra Pequeña de 1 litro",
                    type: "jar",
                    netQuantity: 1,
                    UnitOfMeasure: "lt"
                }
            ]
        });
    }
    catch (error) {
        console.log("\nError capturado por el dominio:");
        console.log(error.message);
    }
    finally {
        await mongoose.connection.close();
        console.log("Conexión cerrada.");
    }
};
runTests();
//# sourceMappingURL=main.js.map