import { ValueObject } from "../../../../../shared/domain/value-objects/ValueObject.js";

export class PresentationNetQuantity extends ValueObject<number> {
    constructor(value: number) {
        super(value);
        if (value <= 0) {
            throw new Error("La cantidad neta debe ser mayor a 0");
        }
    }
}