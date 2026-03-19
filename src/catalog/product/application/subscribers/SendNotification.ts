import type { EventHandler } from "../../../../shared/domain/ports/EventHandler.js";
import type { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";

export class SendNotification implements EventHandler<ProductCreatedEvent> {
    public async handle(event: ProductCreatedEvent): Promise<void> {
        console.log(
            `[SendNotification]: Notificación interna enviada — producto "${event.productName}" creado el ${event.occurredOn.toISOString()}`
        );
    }
}