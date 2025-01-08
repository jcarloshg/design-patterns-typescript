import { ConcreteElement } from "./ConcreteElement";
import { ElementDecoratorBody } from "./ElementDecoratorBody";
import { ElementDecoratorDiv } from "./ElementDecoratorDiv";
import { ElementDecoratorHTML } from "./ElementDecoratorHTML";

const dataToRender = "Hello, World!";

const concreteElement_01 = new ConcreteElement();
const decoratorDiv_01 = new ElementDecoratorDiv(concreteElement_01);
const decoratorDiv_02 = new ElementDecoratorDiv(decoratorDiv_01);
decoratorDiv_02.render(dataToRender);

// ============================================================
// >>> output
// <div>
//   <div>
//     Hello, World!
//   </div>
// </div>
// ============================================================

const concreteElement = new ConcreteElement();
const decoratorDiv01 = new ElementDecoratorDiv(concreteElement);
const decoratorDiv02 = new ElementDecoratorDiv(decoratorDiv01);
const decoratorBody = new ElementDecoratorBody(decoratorDiv02);
const elementDecoratorHTML = new ElementDecoratorHTML(decoratorBody);
elementDecoratorHTML.render(dataToRender);

// ============================================================
// >>> output
// <html>
//      <body>
//          <div>
//              <div>
//                  Hello, World!
//              </div>
//          </div>
//      </body>
// </html>
// ============================================================
