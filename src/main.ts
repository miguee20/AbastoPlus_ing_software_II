import "reflect-metadata"; 
import mongoose from "mongoose";

import { container } from "./di/inversify.config.js";
import { TYPES } from "./di/types.js";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/abasto_plus";

const runTests = async (): Promise<void> => {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos");

        console.log("\n--- INICIANDO PRUEBA CON CASO DE USO ---");
        

        const saveProduct = container.get<SaveProduct>(TYPES.SaveProduct);

        await saveProduct.execute({
            id: "550e8401-e29b-41d8-a116-446625440000",
            name: "Atole de elote Xela",
            baseUnit: "lt",
            presentations: [
                {
                    id: "123e4247-e89b-12d3-a456-426614174001",
                    name: "Jarra Pequeña de 5 litros",
                    type: "jar", 
                    netQuantity: 5,
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