import { DomainEvent } from "../../../../shared/domain/events/DomainEvent.js";
export class ProductCreatedEvent extends DomainEvent {
    productId;
    productName;
    baseUnit;
    // Nombre canónico del evento — es la "key" que usa el bus para enrutar
    static EVENT_NAME = "catalog.product_created";
    constructor(productId, productName, baseUnit) {
        super(ProductCreatedEvent.EVENT_NAME, {
            productId,
            productName,
            baseUnit
        });
        this.productId = productId;
        this.productName = productName;
        this.baseUnit = baseUnit;
    }
}
//# sourceMappingURL=ProductCreatedEvent.js.map