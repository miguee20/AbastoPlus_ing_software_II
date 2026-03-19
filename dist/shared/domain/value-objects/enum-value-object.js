import { ValueObject } from "./ValueObject.js";
export class EnumValueObject extends ValueObject {
    constructor(value, validValues) {
        super(value);
        this.ensureValueIsValid(value, validValues);
    }
    ensureValueIsValid(value, validValues) {
        if (!validValues.includes(value)) {
            throw new Error(`El valor ${value} no es una opción válida`);
        }
    }
}
//# sourceMappingURL=enum-value-object.js.map