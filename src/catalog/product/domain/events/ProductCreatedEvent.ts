import { DomainEvent } from "../../../../shared/domain/events/DomainEvent.js";

export class ProductCreatedEvent extends DomainEvent {

    // Nombre canónico del evento — es la "key" que usa el bus para enrutar
    public static readonly EVENT_NAME = "catalog.product_created";

    constructor(
        public readonly productId: string,
        public readonly productName: string,
        public readonly baseUnit: string
    ) {
        super(ProductCreatedEvent.EVENT_NAME, {
            productId,
            productName,
            baseUnit
        });
    }
}