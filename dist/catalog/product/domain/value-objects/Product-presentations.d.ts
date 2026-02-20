import { Presentation } from "../entities/presentation.js";

export class ProductPresentations {
  private readonly values: Presentation[];

  private constructor(presentations: Presentation[]) {
    if (presentations.length === 0) {
      throw new Error("Debe existir al menos una presentación");
    }

    if (presentations.length > 5) {
      throw new Error("Solo se permiten hasta 5 presentaciones");
    }

    this.values = presentations;
  }

  static createFromArray(presentations: Array<{
    id: string;
    name: string;
    type: string;
    netQuantity: number;
    UnitOfMeasure: string;
  }>): ProductPresentations {

    if (presentations.length > 5) {
      throw new Error("Máximo 5 presentaciones permitidas");
    }

    const mapped = presentations.map(p => 
      new Presentation(
        p.id,
        p.name,
        p.type,
        p.netQuantity,
        p.UnitOfMeasure
      )
    );

    return new ProductPresentations(mapped);
  }

  get items(): Presentation[] {
    return this.values;
  }

  add(presentation: Presentation): void {
    if (this.values.length >= 5) {
      throw new Error("No se pueden agregar más de 5 presentaciones");
    }
    this.values.push(presentation);
  }
}