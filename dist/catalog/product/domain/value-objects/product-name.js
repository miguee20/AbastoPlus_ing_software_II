import { StringValueObject } from "../../../../shared/domain/value-objects/string-value-object.js";
export class ProductName extends StringValueObject {
    constructor(value) {
        super(value);
        this.ensureNameIsLongEnough(value);
    }
    ensureNameIsLongEnough(value) {
        if (value.length <= 10) {
            throw new Error("El nombre del producto debe tener más de 10 caracteres");
        }
    }
}
//# sourceMappingURL=product-name.js.map