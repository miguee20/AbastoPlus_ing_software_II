import type { TranslatorService } from "../application/ports/TranslatorService.js";

export class MyMemoryTranslator implements TranslatorService {
    
    async translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string> {
        const langpair = `${sourceLanguage}|${targetLanguage}`;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`MyMemory translation error: ${response.status}`);
        }

        const data = await response.json();
        if (data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }

        throw new Error("Formato de respuesta de MyMemory inesperado");
    }
}