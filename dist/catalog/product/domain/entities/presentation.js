import { PresentationId } from "./presentation/presentation-id.js";
import { PresentationName } from "./presentation/presentation-name.js";
import { PresentationType } from "./presentation/presentation-type.js";
import { PresentationNetQuantity } from "./presentation/presentation-net-quantity.js";
import { PresentationUnitOfMeasure } from "./presentation/presentation-unit-of-measure.js";
export class Presentation {
    id;
    name;
    type;
    netQuantity;
    unitOfMeasure;
    constructor(id, name, type, netQuantity, unitOfMeasure) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.netQuantity = netQuantity;
        this.unitOfMeasure = unitOfMeasure;
    }
    static build(id, name, type, netQuantity, unitOfMeasure) {
        return new Presentation(new PresentationId(id), new PresentationName(name), new PresentationType(type), new PresentationNetQuantity(netQuantity), new PresentationUnitOfMeasure(unitOfMeasure));
    }
}
//# sourceMappingURL=presentation.js.map