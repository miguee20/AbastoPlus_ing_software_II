/**
 * Implementación en memoria del EventBus.
 *
 * Internamente maneja un mapa de:
 *   eventName -> EventHandler[]   (esto es la "queue" en memoria del diagrama)
 *
 * Cuando se publica un evento, se despachan todos los handlers
 * suscritos a ese nombre de evento.
 */
export class InMemoryEventBus {
    // Subscribers = { "catalog.product_created": [NotifyBoss, SendSms, ...] }
    subscribers;
    constructor() {
        this.subscribers = new Map();
    }
    subscribe(eventName, handler) {
        const existingHandlers = this.subscribers.get(eventName) ?? [];
        existingHandlers.push(handler);
        this.subscribers.set(eventName, existingHandlers);
        console.log(`[EventBus]: Handler "${handler.constructor.name}" suscrito a "${eventName}"`);
    }
    async publish(events) {
        for (const event of events) {
            const handlers = this.subscribers.get(event.eventName) ?? [];
            if (handlers.length === 0) {
                console.warn(`[EventBus]: No hay suscriptores para el evento "${event.eventName}"`);
                continue;
            }
            console.log(`[EventBus]: Publicando "${event.eventName}" a ${handlers.length} suscriptor(es)...`);
            // Despachamos todos los handlers de esta cola en paralelo
            await Promise.all(handlers.map(handler => handler.handle(event)));
        }
    }
}
//# sourceMappingURL=InMemoryEventBus.js.map