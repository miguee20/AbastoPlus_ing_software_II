import { Product } from "./catalog/product/domain/product.js";

const runTests = (): void => {
    try {
        console.log("PRUEBA 1: Creando un producto válido...");
        const validProductId: string = "550e8400-e29b-41d4-a716-446655440000";
        
        const miProducto = Product.build(validProductId, "Café de Altura Quetzaltenango", "lb");
        console.log("Producto creado exitosamente en memoria.");
        const rawPresentations = [
            {
                id: "123e4567-e89b-12d3-a456-426614174001",
                name: "Bolsa Pequeña de 1 Libra",
                type: "Bolsa", 
                netQuantity: 1,
                UnitOfMeasure: "lb"
            },
            {
                id: "123e4567-e89b-12d3-a456-426614174002",
                name: "Saco Mayorista 50 Libras",
                type: "Saco",
                netQuantity: 50,
                UnitOfMeasure: "lb"
            }
        ];
        
        console.log("Cargando presentaciones crudas al producto...");
        miProducto.loadPresentations(rawPresentations);
        
        console.log("Presentaciones validadas y cargadas con éxito\n");
        console.log(miProducto);
        
        console.log("PRUEBA 2: Intentando romper las reglas del negocio...");
        const productoMalo = Product.build("999e8400-e29b-41d4-a716-446655449999", "Pan", "Unidad");
        
        console.log(" ERROR: El sistema permitió crear un producto inválido.");
        
    } catch (error: any) { 
        console.log("El dominio protegió la aplicación.");
        console.log(`Mensaje de error capturado: "${error.message}"`);
    }
};

runTests();