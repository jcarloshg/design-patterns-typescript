import { ConvertDocs, SPACER } from "./ConvertDocs";

export class ConvertDocToXML implements ConvertDocs {
  convert(data: string, level: number = 0): string {
    const spaces = SPACER.repeat(level);
    const file = `
${spaces}<xml version="1.0">
${spaces}   ${data}
${spaces}</xml>
            `;

    console.log("Converting to XML...");
    // console.log(file);
    return file;
  }
}
