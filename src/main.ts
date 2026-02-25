import mongoose from "mongoose";
import { Product } from "./catalog/product/domain/product.js";
import { MongoProductRepository } from "./catalog/product/infrastructure/MongoProductRepository.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/abasto_plus";

const runTests = async (): Promise<void> => {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");

        console.log("\n--- INICIANDO PRUEBA DE DOMINIO E INFRAESTRUCTURA ---");
        const validProductId: string = "550e8400-e29b-41d4-a116-446655440000";
        const miProducto = Product.build(validProductId, "Café de Altura Huehuetenango", "lb");
        const rawPresentations = [
            {
                id: "123e4567-e89b-12d3-a456-426614174001",
                name: "Bolsa Pequeña de 5 Libras",
                type: "bag", 
                netQuantity: 1,
                UnitOfMeasure: "lb"
            }
        ];
        miProducto.loadPresentations(rawPresentations);
        console.log("Entidad de dominio construida y validada.");
        const repository = new MongoProductRepository();
        await repository.save(miProducto);

    } catch (error: any) {
        console.log("\n Error capturado:");
        console.log(error.message);
    } finally {
        await mongoose.connection.close();
        console.log("🔌 Conexión cerrada.");
    }
};

runTests();