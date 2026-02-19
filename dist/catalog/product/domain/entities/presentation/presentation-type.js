import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-object.js";
export class PresentationType extends EnumValueObject {
    constructor(value) {
        super(value, ["bag", "sack", "can", "jar", "bottle", "box"]);
    }
}
//# sourceMappingURL=presentation-type.js.map