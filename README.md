# AbastoPlus - Backend ERP (DDD Architecture)

**Estado:** En desarrollo activo (Work in Progress)

AbastoPlus es una API RESTful escalable diseñada para la gestión integral de suministros, inventario y ventas. Este proyecto está construido utilizando **TypeScript** y **Node.js**, aplicando estrictamente los principios de **Domain-Driven Design (DDD)** y Arquitectura Hexagonal para garantizar un alto desacoplamiento, mantenibilidad y lógica de negocio aislada.

## Arquitectura y Patrones (DDD)

El proyecto divide su lógica de negocio en múltiples **Bounded Contexts** (Contextos Delimitados), asegurando que cada dominio opere de forma independiente.

Cada módulo (ej. `catalog/product`) implementa una separación estricta en tres capas:
* **Domain Layer:** Contiene el corazón del negocio. Aquí residen las `Entities` y `Value Objects` (ej. representaciones puras de productos, precios, medidas), totalmente agnósticos a frameworks externos o bases de datos.
* **Application Layer:** Orquesta los casos de uso del sistema utilizando los repositorios y entidades del dominio.
* **Infrastructure Layer:** Implementa los detalles técnicos (Controladores REST, conexiones a MongoDB/Mongoose, inyección de dependencias).

### Módulos Principales (Bounded Contexts)
**Catalog:** Gestión de productos y presentaciones.
**Customers:** Administración de clientes.
**Inventory:** Control de stock y movimientos.
**Logistics:** Gestión de envíos y distribución.
**Procurement:** Compras y gestión de proveedores.
**Sales:** Procesamiento de transacciones y ventas.

## Tech Stack

**Core & Arquitectura:**
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![DDD](https://img.shields.io/badge/Architecture-Domain_Driven_Design-blueviolet?style=for-the-badge)

**Base de Datos:**
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
