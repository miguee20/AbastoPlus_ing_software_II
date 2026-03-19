import { Product } from "../../domain/product.js";
import { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";
export class SaveProduct {
    repository;
    translator;
    eventBus;
    constructor(repository, translator, eventBus) {
        this.repository = repository;
        this.translator = translator;
        this.eventBus = eventBus;
    }
    async execute(data) {
        // 1. Construir el agregado desde el dominio
        const product = Product.build(data.id, data.name, data.baseUnit);
        if (data.presentations && data.presentations.length > 0) {
            product.loadPresentations(data.presentations);
        }
        // 2. Persistir en base de datos
        await this.repository.save(product);
        // 3. Crear el evento de dominio
        const event = new ProductCreatedEvent(data.id, data.name, data.baseUnit);
        // 4. Publicar al EventBus — los suscriptores se encargan del resto
        await this.eventBus.publish([event]);
    }
}
//# sourceMappingURL=save-product.js.map