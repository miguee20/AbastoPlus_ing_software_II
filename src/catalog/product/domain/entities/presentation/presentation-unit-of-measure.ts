import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-object.js";

export class PresentationUnitOfMeasure extends EnumValueObject<string> {
    constructor(value: string) {
        super(value, ["Kg", "g", "lb", "ml", "lt", "Unidad"]); 
    }
}