export class NotifyBoss {
    async handle(event) {
        console.log(`[NotifyBoss]: Jefe notificado — se creó el producto "${event.productId}" (${event.productName})`);
    }
}
//# sourceMappingURL=NotifyBoss.js.map