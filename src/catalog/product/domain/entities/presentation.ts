import { PresentationId } from "./presentation/presentation-id.js";
import { PresentationName } from "./presentation/presentation-name.js";
import { PresentationType } from "./presentation/presentation-type.js";
import { PresentationNetQuantity } from "./presentation/presentation-net-quantity.js";
import { PresentationUnitOfMeasure } from "./presentation/presentation-unit-of-measure.js";

export class Presentation {
    private readonly id: PresentationId;
    private readonly name: PresentationName;
    private readonly type: PresentationType;
    private readonly netQuantity: PresentationNetQuantity;
    private readonly unitOfMeasure: PresentationUnitOfMeasure;

    private constructor(
        id: PresentationId,
        name: PresentationName,
        type: PresentationType,
        netQuantity: PresentationNetQuantity,
        unitOfMeasure: PresentationUnitOfMeasure
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.netQuantity = netQuantity;
        this.unitOfMeasure = unitOfMeasure;
    }

    public static build(
        id: string,
        name: string,
        type: string,
        netQuantity: number,
        unitOfMeasure: string
    ): Presentation {
        return new Presentation(
            new PresentationId(id),
            new PresentationName(name),
            new PresentationType(type),
            new PresentationNetQuantity(netQuantity),
            new PresentationUnitOfMeasure(unitOfMeasure)
        );
    }
}