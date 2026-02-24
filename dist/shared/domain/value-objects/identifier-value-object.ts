import { ValueObject } from "./ValueObject.js";

export class IdentifierValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureValueIsUuid(value);
    }
    private ensureValueIsUuid(value: string): void {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(value)) {
            throw new Error(`<${this.constructor.name}> no tiene un formato UUID válido: ${value}`);
        }
    }
}