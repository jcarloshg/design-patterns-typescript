import { ConvertDocs, SPACER } from "./ConvertDocs";

export class ConvertDocToPDF implements ConvertDocs {
  convert(data: string, level: number = 0): string {
    const spaces = SPACER.repeat(level);
    const file = `
${spaces}______PDF______
${spaces}   ${data}
${spaces}______PDF______
        `;

    console.log("Converting to PDF...");
    // console.log(file);

    return file;
  }
}
