import { Presentation } from "../entities/presentation.js";
export class ProductPresentations {
    values;
    constructor(presentations) {
        this.values = presentations;
    }
    static createFromArray(presentations) {
        const presentationEntities = presentations.map(item => Presentation.build(item.id, item.name, item.type, item.netQuantity, item.UnitOfMeasure));
        return new ProductPresentations(presentationEntities);
    }
    get items() {
        return this.values;
    }
}
//# sourceMappingURL=product-presentations.js.map