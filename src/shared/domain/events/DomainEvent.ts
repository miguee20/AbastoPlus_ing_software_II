export abstract class DomainEvent {
    public readonly eventName: string;
    public readonly occurredOn: Date;
    public readonly payload: Record<string, unknown>;

    constructor(eventName: string, payload: Record<string, unknown>) {
        this.eventName = eventName;
        this.occurredOn = new Date();
        this.payload = payload;
    }
}