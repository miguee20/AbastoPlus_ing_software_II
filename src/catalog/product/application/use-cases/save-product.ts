import { Product } from "../../domain/product.js";
import { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";
import type { TranslatorService } from "../ports/TranslatorService.js";
import type { ProductRepository } from "../product-repository.js";
import type { EventBus } from "../../../../shared/domain/ports/EventBus.js";

export interface ProductPrimitives {
    id: string;
    name: string;
    baseUnit: string;
    presentations: Array<{
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        UnitOfMeasure: string;
    }>;
}

export class SaveProduct {
    private readonly repository: ProductRepository;
    private readonly translator: TranslatorService;
    private readonly eventBus: EventBus;

    constructor(
        repository: ProductRepository,
        translator: TranslatorService,
        eventBus: EventBus
    ) {
        this.repository = repository;
        this.translator = translator;
        this.eventBus = eventBus;
    }

    public async execute(data: ProductPrimitives): Promise<void> {

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