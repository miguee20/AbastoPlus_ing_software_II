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

        

<<<<<<< Updated upstream
        const saveProduct = container.get<SaveProduct>(TYPES.SaveProduct);

        await saveProduct.execute({
            id: "550e8401-e39b-41d8-a116-446615440000",
            name: "Atole de arroz Xela",
            baseUnit: "lt",
            presentations: [
                {
                    id: "123e4247-e89b-12d3-a456-426414174001",
=======
        // --- Registrar suscriptores al EventBus ---
        // Esto replica el objeto "Subscribers" del diagrama:
        // { "catalog.product_created": [NotifyBoss, SendSmsToCustomers, SendNotification] }
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new NotifyBoss());
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new SendSmsToCustomers());
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new SendNotification());
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new Translate(translator));


        // --- Caso de uso ---
        const saveProduct = new SaveProduct(repository, eventBus);

        console.log("\n--- INICIANDO PRUEBA CON CASO DE USO + EVENT BUS ---");

        await saveProduct.execute({
            id: "550e8401-e29b-41e4-a726-446615430000",
            name: "Café de la montaña en Xela",
            baseUnit: "lt",
            presentations: [
                {
                    id: "123e4517-e39b-12d3-a456-426614574001",
>>>>>>> Stashed changes
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