import mongoose from "mongoose";
import { MongoProductRepository } from "./catalog/product/infrastructure/MongoProductRepository.js";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/abasto_plus";

const runTests = async (): Promise<void> => {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");

        console.log("\n--- INICIANDO PRUEBA CON CASO DE USO ---");
        const repository = new MongoProductRepository();
        const saveProduct = new SaveProduct(repository);

        
        await saveProduct.execute({
            id: "550e8401-e29b-41d4-a116-446655440000",
            name: "Atol de masa Xela",
            baseUnit: "lt",
            presentations: [
                {
                    id: "123e4267-e89b-12d3-a456-426614174001",
                    name: "Jarra Pequeña de 1 litro",
                    type: "jar", 
                    netQuantity: 1,
                    UnitOfMeasure: "lt"
                }
            ]
        });

    } catch (error: any) {
        console.log("\nError capturado por el dominio:");
        console.log(error.message);
    } finally {
        await mongoose.connection.close();
        console.log("Conexión cerrada.");
    }
};

runTests();