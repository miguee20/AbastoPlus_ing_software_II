import type { ProductPrimitives } from "../use-cases/save-product.js";

export interface TranslatorService {
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
}