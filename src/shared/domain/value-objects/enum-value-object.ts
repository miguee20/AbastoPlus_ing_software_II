import { ValueObject } from "./ValueObject.js";

export abstract class EnumValueObject<T> extends ValueObject<T> {
  constructor(value: T, validValues: T[]) {
    super(value);
    this.ensureValueIsValid(value, validValues);
  }

  private ensureValueIsValid(value: T, validValues: T[]): void {
    if (!validValues.includes(value)) {
      throw new Error(`El valor ${value} no es una opción válida`);
    }
  }
}