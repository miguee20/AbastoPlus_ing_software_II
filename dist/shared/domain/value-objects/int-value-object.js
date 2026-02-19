import { ValueObject } from "./ValueObject.js";
export class IntValueObject extends ValueObject {
    constructor(value) {
        super(value);
        this.ensureValueIsInt(value);
    }
    ensureValueIsInt(value) {
        if (value % 1 !== 0) {
            throw new Error("El valor debe ser un número entero");
        }
    }
}
//# sourceMappingURL=int-value-object.js.map