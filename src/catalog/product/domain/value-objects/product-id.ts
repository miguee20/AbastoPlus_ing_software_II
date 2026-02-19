import { IdentifierValueObject } from "../../../../shared/domain/value-objects/identifier-value-object.js";

export class ProductId extends IdentifierValueObject {
  constructor(value: string) {
    super(value); 
  }
}