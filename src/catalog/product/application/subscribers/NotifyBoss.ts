import type { EventHandler } from "../../../../shared/domain/ports/EventHandler.js";
import type { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";

export class NotifyBoss implements EventHandler<ProductCreatedEvent> {
    public async handle(event: ProductCreatedEvent): Promise<void> {
        console.log(
            `[NotifyBoss]: Jefe notificado — se creó el producto "${event.productId}" (${event.productName})`
        );
    }
}