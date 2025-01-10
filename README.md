# Pattern Designs

## Structural

### Bridge

#### Documentation

- [YouTube](https://www.youtube.com/watch?v=6bIHhzqMdgg)

#### Implementation

- [Implementation](src/structures/Bridge)

### Composite

![Composite](Docs/composite.png)

#### Documentation

- [YouTube](https://www.youtube.com/watch?v=ES3DnAPted0)
- [Refactoring Guru](https://refactoring.guru/design-patterns/composite)

#### Implementation

- [Forms](src/structures/Composite/Forms/)
  - use this when you need save values to operate with the main method of interface of Composite

### Decorator

![Decorador UML](Docs/decorador.png)
![Decorador UML 02](Docs/decorador_02.png)

- Añadir funcionalidades anidando objetos en otros objectos
- Se sugiere que ninguna funcionalidad debe de depender de otra funcionalidad
- Se sugiere que las Entidades Decoradas pertenezcan:
  - A un mismo nivel de abstracción
  - A un mismo grupo de conceptualization
    - OK: Convertir un doc -> pdf, html, xml, etc.
    - NOT OK: Convertir un doc -> pdf, cerrar sesión, enviar por correo

#### Documentation

- [Refactoring Guru](https://refactoring.guru/es/design-patterns/decorator)
- [Fernando Herrera - [S16/L1] Patrones de Diseño - Soluciones prácticas y eficientes: Decorator | Patrón](https://www.youtube.com/watch?v=uLaFPDB53X0)
- [Fernando Herrera - [S16/L2] Patrones de Diseño - Soluciones prácticas y eficientes: Decorator | Utilización](https://www.youtube.com/watch?v=zAcu20tjZJc)

#### Implementation

- [Convertidor de documentos](src/structures/Decorator/ConvertDocs)
- [Render HTML](src/structures/Decorator/HTML)

## Facade

- Utiliza el patrón Facade cuando necesites una interfaz limitada pero directa a un subsistema complejo.

![Facade](Docs/facade.png)

#### Documentation

- [Refactoring Guru - Facade](https://refactoring.guru/es/design-patterns/facade)

#### Implementation

- [Register with social media](src/structures/Facade/RegisterSocialMedia)

## Flyweight

![Flyweight](Docs/Flyweight.png)

#### Implementation

- [Simple Game](src/structures/Flyweight/SimpleGame)
  - Client - Game
  - Context - Canvas
  - Factory - EmojiFactory
  - Flyweight - EmojiFlyweight
    - State Extrinsic - EmojiExtrinsico

#### Documentation

- [Refactoring Guru - Flyweight](https://refactoring.guru/es/design-patterns/flyweight)
