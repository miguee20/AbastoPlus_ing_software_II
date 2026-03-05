export class Translator {

  constructor(
    private apiToken: string,
    private projectId: string
  ) {}

  async translate(text: string, source: string, target: string): Promise<string> {

    const response = await fetch(
      `https://api.crowdin.com/api/v2/projects/${this.projectId}/ai/translations`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sourceLanguageId: source,
          targetLanguageId: target,
          text
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Crowdin translation error: ${response.status}`);
    }

    const data = await response.json();

    return data.data.translation;
  }
}