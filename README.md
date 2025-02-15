# Pattern Designs

create by: Jose Carlos Huerta

## index 🚀

- [Creation](#creation-)
  - [Abstract Factory](#abstract-factory-)
    - [Documentation](#documentation)
    - [Implementations](#implementations)
    - [Diagram UML](#diagram-uml)
- [Structural](#structural)
  - [Bridge](#bridge)
    - [Documentation](#documentation-1)
    - [Implementation](#implementation)
  - [Composite](#composite)
    - [Documentation](#documentation-2)
    - [Implementation](#implementation-1)
  - [Decorator](#decorator)
    - [Documentation](#documentation-3)
    - [Implementation](#implementation-2)
  - [Facade](#facade)
    - [Documentation](#documentation-4)
    - [Implementation](#implementation-3)
  - [Flyweight](#flyweight)
    - [Documentation](#documentation-5)
    - [Implementation](#implementation-4)
  - [Proxy](#proxy)
    - [Documentation](#documentation-6)
    - [Implementation](#implementation-5)

## Creation 🗺️

### Abstract Factory 🏭

#### Documentation

- [refactoring.guru - Abstract Factory](https://refactoring.guru/design-patterns/abstract-factory)

- [YouTube - BettaTech - ABSTRACT FACTORY | PATRONES de DISEÑO](https://www.youtube.com/watch?v=CVlpjFJN17U)

#### Implementations

- [Books](src/creations/AbstractFactory/Books/index.ts)
- [Clothes](src/creations/AbstractFactory/Clothes/indexFactory.ts)

#### Diagram UML

![abstract-factory.png](Docs/abstract-factory.png)

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

- The factory has to manage the heavy resources
- When one resource is created, this should be hashed to easy find

![Flyweight](Docs/Flyweight.png)

#### Implementation

- [Simple Game](src/structures/Flyweight/SimpleGame)
  - Client - Game
  - Context - Canvas
  - Factory - EmojiFactory
  - Flyweight - EmojiFlyweight
    - State Extrinsic - EmojiExtrinsico

#### Documentation

- [YouTube - FLYWEIGHT en 2 MINUTOS | PATRONES DE DISEÑO SOFTWARE](https://www.youtube.com/watch?v=0N7C-XzT2Nw)
- [YouTube - Patrones de diseño - 03 Flyweight](https://www.youtube.com/watch?v=R9KO6sojNTE&t=61s)
- [Refactoring Guru - Flyweight](https://refactoring.guru/es/design-patterns/flyweight)

## Proxy

- Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.

![Proxy](Docs/Proxy.png)

### Implementation

- [Get Photos Instagram With Cache](src/structures/Proxy/GetMyPhotosInstagram)

### Documentation

- [Refactoring Guru - Proxy](https://refactoring.guru/es/design-patterns/proxy)
