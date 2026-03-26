export class Translate {
    translator;
    constructor(translator) {
        this.translator = translator;
    }
    async handle(event) {
        // Obtenemos el nombre dinámicamente desde el evento de dominio
        const nameToTranslate = event.productName;
        const translated = await this.translator.translate(nameToTranslate, "es", "en");
        console.log(`[Traducción]: Producto original: "${nameToTranslate}" -> Traducido: "${translated}"`);
    }
}
//# sourceMappingURL=Translate.js.map