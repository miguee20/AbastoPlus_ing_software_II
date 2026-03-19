export class MyMemoryTranslator {
    async translate(text, sourceLanguage, targetLanguage) {
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
//# sourceMappingURL=my-memory-translator.js.map