import { ValueObject } from "./ValueObject.js";

export abstract class IntValueObject extends ValueObject<number> {
    
    constructor(value: number) {
        super(value);
        this.ensureValueIsInt(value);
    }

    private ensureValueIsInt(value: number): void {
        if (value % 1 !== 0) {
            throw new Error("El valor debe ser un número entero");
        }
    }
}