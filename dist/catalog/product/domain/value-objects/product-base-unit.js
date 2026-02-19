import { EnumValueObject } from "../../../../shared/domain/value-objects/enum-value-object.js";
export class ProductBaseUnit extends EnumValueObject {
    constructor(value) {
        super(value, ["Kg", "g", "lb", "ml", "lt", "unidad"]);
    }
}
//# sourceMappingURL=product-base-unit.js.map