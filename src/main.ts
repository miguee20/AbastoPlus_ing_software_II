import mongoose from "mongoose";
import { MongoProductRepository } from "./catalog/product/infrastructure/MongoProductRepository.js";
import { MyMemoryTranslator } from "./catalog/product/infrastructure/my-memory-translator.js";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product.js";
import { InMemoryEventBus } from "./shared/infrastructure/InMemoryEventBus.js";
import { NotifyBoss } from "./catalog/product/application/subscribers/NotifyBoss.js";
import { SendSmsToCustomers } from "./catalog/product/application/subscribers/SendSmsToCustomers.js";
import { SendNotification } from "./catalog/product/application/subscribers/SendNotification.js";
import { ProductCreatedEvent } from "./catalog/product/domain/events/ProductCreatedEvent.js";

const MONGO_URI = "mongodb://127.0.0.1:27017/abasto_plus";

const runTests = async (): Promise<void> => {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base de datos\n");

        // --- Infraestructura ---
        const repository = new MongoProductRepository();
        const translator = new MyMemoryTranslator();
        const eventBus = new InMemoryEventBus();

        // --- Registrar suscriptores al EventBus ---
        // Esto replica el objeto "Subscribers" del diagrama:
        // { "catalog.product_created": [NotifyBoss, SendSmsToCustomers, SendNotification] }
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new NotifyBoss());
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new SendSmsToCustomers());
        eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, new SendNotification());

        // --- Caso de uso ---
        const saveProduct = new SaveProduct(repository, translator, eventBus);

        console.log("\n--- INICIANDO PRUEBA CON CASO DE USO + EVENT BUS ---");

        await saveProduct.execute({
            id: "550e8401-e29b-41d4-a716-446655440000",
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
        console.log("\nError capturado:");
        console.log(error.message);
    } finally {
        await mongoose.connection.close();
        console.log("\nConexión cerrada.");
    }
};

runTests();