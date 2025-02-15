import { NoteBook, NoteBookObject } from "../AbstractBookFactory/NoteBook";

export class HardCoverNoteBook implements NoteBook {
    constructor(
        public readonly pagesNumber: number,
        public readonly size: "A4" | "A5",
        public readonly type: "square" | "lined" | "dotted",
        public readonly coverType: "hardcover" = "hardcover",
        public readonly coverMaterial: "leather" | "plastic" = "leather"
    ) { }

    public toString(): string {
        return `NoteBook: ${this.pagesNumber}, size: ${this.size} pages with ${this.type} type. Cover: ${this.coverType}, material: ${this.coverMaterial}`;
    }

    public toObject(): NoteBookObject {
        return {
            metadata: {
                pagesNumber: this.pagesNumber,
                size: this.size,
                type: this.type,
            },
            cover: {
                type: this.coverType,
                material: this.coverMaterial
            },
        }
    }
}