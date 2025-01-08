import { ConvertDocs, SPACER } from "./ConvertDocs";

export class ConvertDocToHTML implements ConvertDocs {
  convert(data: string, level: number = 0): string {
    const spaces = SPACER.repeat(level);
    const file = `
${spaces}<html>
${spaces}   ${data}
${spaces}</html
    `;
    console.log("Converting to HTML...");
    // console.log(file);

    return file;
  }
}
