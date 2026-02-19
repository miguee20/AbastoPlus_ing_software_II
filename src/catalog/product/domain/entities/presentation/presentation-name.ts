import { StringValueObject } from "../../../../../shared/domain/value-objects/string-value-object.js";

export class PresentationName extends StringValueObject {
    constructor(value: string) {
        super(value);
        if (value.trim().length === 0) {
            throw new Error("El nombre de la presentación no puede estar vacío");
        }
    }
}