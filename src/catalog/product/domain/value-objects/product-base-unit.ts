import { EnumValueObject } from "../../../../shared/domain/value-objects/enum-value-object.js";

export class ProductBaseUnit extends EnumValueObject<string> {
    constructor(value: string) {
        super(value, ["Kg", "lb", "Oz"]); 
    }
}