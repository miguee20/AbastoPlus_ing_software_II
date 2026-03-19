import type { EventHandler } from "../../../../shared/domain/ports/EventHandler.js";
import type { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";

export class SendSmsToCustomers implements EventHandler<ProductCreatedEvent> {
    public async handle(event: ProductCreatedEvent): Promise<void> {
        console.log(
            `[SendSmsToCustomers]: SMS enviado a clientes — nuevo producto disponible: "${event.productName}" [ID: ${event.productId}]`
        );
    }
}