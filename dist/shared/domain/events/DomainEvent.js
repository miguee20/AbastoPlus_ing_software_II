export class DomainEvent {
    eventName;
    occurredOn;
    payload;
    constructor(eventName, payload) {
        this.eventName = eventName;
        this.occurredOn = new Date();
        this.payload = payload;
    }
}
//# sourceMappingURL=DomainEvent.js.map