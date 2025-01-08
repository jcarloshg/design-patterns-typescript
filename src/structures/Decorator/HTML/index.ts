import { ConcreteElement } from "./ConcreteElement";
import { ElementDecoratorBody } from "./ElementDecoratorBody";
import { ElementDecoratorDiv } from "./ElementDecoratorDiv";
import { ElementDecoratorHTML } from "./ElementDecoratorHTML";

const dataToRender = "Hello, World!";

const concreteElement = new ConcreteElement();
const decoratorDiv01 = new ElementDecoratorDiv(concreteElement);
const decoratorDiv02 = new ElementDecoratorDiv(decoratorDiv01);
const decoratorBody = new ElementDecoratorBody(decoratorDiv02)
const elementDecoratorHTML = new ElementDecoratorHTML(decoratorBody);
elementDecoratorHTML.render(dataToRender);
