import { InMemoryEventBus } from "./shared/infrastructure/InMemoryEventBus.js";
import { ProductCreatedEvent } from "./catalog/product/domain/events/ProductCreatedEvent.js";
import { MyMemoryTranslator } from "./catalog/product/infrastructure/my-memory-translator.js";
import type { EventHandler } from "./shared/domain/ports/EventHandler.js";

async function testEventBus() {
    console.log("\n--- TEST 1: EVENT BUS ---");
    const eventBus = new InMemoryEventBus();
    let handlerCalled = false;

    // Creamos un Mock Handler (un espía)
    const mockHandler: EventHandler<ProductCreatedEvent> = {
        handle: async (event: ProductCreatedEvent) => {
            console.log(`[Test]: Recibido evento para "${event.productName}"`);
            handlerCalled = true;
        }
    };

    // 1. Suscribir
    eventBus.subscribe(ProductCreatedEvent.EVENT_NAME, mockHandler);

    // 2. Publicar
    const event = new ProductCreatedEvent("1", "Producto de Prueba", "ud");
    await eventBus.publish([event]);

    // 3. Validar
    if (handlerCalled) {
        console.log("ÉXITO: El Event Bus notificó al suscriptor.");
    } else {
        console.log("ERROR: El suscriptor no fue llamado.");
    }
}

async function testTranslator() {
    console.log("\n--- TEST 2: TRANSLATOR SERVICE ---");
    const translator = new MyMemoryTranslator();

    try {
        const result = await translator.translate("Hola Mundo", "es", "en");
        console.log(`[Test]: "Hola Mundo" -> "${result}"`);
        
        if (result.toLowerCase().includes("hello")) {
            console.log("ÉXITO: La traducción es correcta.");
        } else {
            console.log("AVISO: La API devolvió algo inesperado, pero respondió.");
        }
    } catch (error) {
        console.log("ERROR: No se pudo conectar con el servicio de traducción.");
    }
}

async function runAllTests() {
    await testEventBus();
    await testTranslator();
    console.log("\n--- PRUEBAS FINALIZADAS ---");
}

runAllTests();
