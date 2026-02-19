import { ValueObject } from "./ValueObject.js";
export declare abstract class EnumValueObject<T> extends ValueObject<T> {
    constructor(value: T, validValues: T[]);
    private ensureValueIsValid;
}
//# sourceMappingURL=enum-value-object.d.ts.map