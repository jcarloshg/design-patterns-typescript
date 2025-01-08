import { ConvertDocsDecoratorPDF } from './ConvertDocsDecoratorPDF';
import { ConvertDocsDecoratorXML } from './ConvertDocsDecoratorXML';
import { ConvertDocToHTML } from './ConvertDocToHTML';
const doc = "How to improve in TypeScript";

const convertDocToHTML = new ConvertDocToHTML();
const html = convertDocToHTML.convert(doc);
console.log(html);

const decoratorXML = new ConvertDocsDecoratorXML(convertDocToHTML);
const decoratorPDF = new ConvertDocsDecoratorPDF(decoratorXML);
const pdf = decoratorPDF.convert(doc);
console.log(pdf);

