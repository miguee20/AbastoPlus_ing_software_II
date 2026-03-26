import type { EventHandler } from "../../../../shared/domain/ports/EventHandler.js";
import type { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent.js";
import type { TranslatorService } from "../../application/ports/TranslatorService.js";

export class Translate implements EventHandler<ProductCreatedEvent> {
    private translator: TranslatorService;

    constructor(translator: TranslatorService) {
        this.translator = translator;
    }

    public async handle(event: ProductCreatedEvent): Promise<void> {
        // Obtenemos el nombre dinámicamente desde el evento de dominio
        const nameToTranslate = event.productName;

        const translated = await this.translator.translate(
            nameToTranslate,        
            "es",             
            "en"               
        );

        console.log(`[Traducción]: Producto original: "${nameToTranslate}" -> Traducido: "${translated}"`);
    }
}