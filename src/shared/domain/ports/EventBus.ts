import type { DomainEvent } from "../events/DomainEvent.js";
import type { EventHandler } from "./EventHandler.js";

export interface EventBus {
    publish(events: DomainEvent[]): Promise<void>;
    subscribe(eventName: string, handler: EventHandler): void;
}