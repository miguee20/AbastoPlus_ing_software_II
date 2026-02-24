export abstract class ValueObject<T> {
    protected readonly _value: T;
    constructor(value: T) {
        this._value = value;
    }

    public getValue(): T {
        return this._value;
    }
}
