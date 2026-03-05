import { Container } from "inversify";
import { TYPES } from "./types.js";
import { MongoProductRepository } from "../catalog/product/infrastructure/MongoProductRepository.js";
import { SaveProduct } from "../catalog/product/application/use-cases/save-product.js";
const container = new Container();
container.bind(TYPES.ProductRepository).to(MongoProductRepository);
container.bind(TYPES.SaveProduct).to(SaveProduct);
export { container };
//# sourceMappingURL=inversify.config.js.map