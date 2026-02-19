import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-object.js";

export class PresentationType extends EnumValueObject<string> {
    constructor(value: string) {
        super(value, ["bag", "sack", "can", "jar", "bottle", "box"]); 
    }
}