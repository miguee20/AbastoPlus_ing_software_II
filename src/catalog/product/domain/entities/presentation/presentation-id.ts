import { IdentifierValueObject } from "../../../../../shared/domain/value-objects/identifier-value-object.js";

export class PresentationId extends IdentifierValueObject {
    constructor(value: string) {
        super(value);
    }
}