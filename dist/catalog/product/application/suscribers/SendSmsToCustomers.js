export class SendSmsToCustomers {
    async handle(event) {
        console.log(`[SendSmsToCustomers]: SMS enviado a clientes — nuevo producto disponible: "${event.productName}" [ID: ${event.productId}]`);
    }
}
//# sourceMappingURL=SendSmsToCustomers.js.map