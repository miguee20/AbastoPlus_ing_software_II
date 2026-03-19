export class SendNotification {
    async handle(event) {
        console.log(`[SendNotification]: Notificación interna enviada — producto "${event.productName}" creado el ${event.occurredOn.toISOString()}`);
    }
}
//# sourceMappingURL=SendNotification.js.map