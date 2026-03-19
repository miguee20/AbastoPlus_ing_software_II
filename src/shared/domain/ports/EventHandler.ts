import type { DomainEvent } from "../events/DomainEvent.js";

export interface EventHandler<T extends DomainEvent = DomainEvent> {
    handle(event: T): Promise<void>;
}