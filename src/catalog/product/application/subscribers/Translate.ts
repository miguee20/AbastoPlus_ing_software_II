import type { EventHandler } from "../../../../shared/domain/ports/EventHandler.js";
import type { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";
import type { TranslatorService } from "../../application/ports/TranslatorService.js";

export class Translate implements EventHandler<ProductCreatedEvent> {
    private name: string;
    private translator: TranslatorService;

    constructor(name: string, translator: TranslatorService) {
        this.name = name;
        this.translator = translator;
    }

    public async handle(event: ProductCreatedEvent): Promise<void> {
        const translated = await this.translator.translate(
            this.name,        
            "en",             
            "es"               
        );

        console.log(`Producto: ${this.name}`);
        console.log(`Nombre traducido: ${translated}`);
    }
}