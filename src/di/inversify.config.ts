import { Container } from "inversify";
import { TYPES } from "./types.js";


import type { ProductRepository } from "../catalog/product/application/product-repository.js";

import { MongoProductRepository } from "../catalog/product/infrastructure/MongoProductRepository.js";
import { SaveProduct } from "../catalog/product/application/use-cases/save-product.js";

const container = new Container();

container.bind<ProductRepository>(TYPES.ProductRepository).to(MongoProductRepository);

container.bind<SaveProduct>(TYPES.SaveProduct).to(SaveProduct);

export { container };