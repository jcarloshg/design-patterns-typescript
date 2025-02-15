import { NoteBook, NoteBookObject } from "../AbstractBookFactory/NoteBook";
import { RecordData } from "./RecordData";

export class SoftCoverNoteBook implements NoteBook, RecordData {

    constructor(
        public readonly pagesNumber: number,
        public readonly size: "A4" | "A5" = "A4",
        public readonly type: "square" | "lined" | "dotted" = "lined",
        public readonly coverType: "softcover" = "softcover",
        public readonly coverMaterial: "paper" = "paper",
        public readonly createdBy: string = "SoftCoverNoteBookFactory",
        public readonly createdAt: Date = new Date(),
    ) { }

    public toString(): string {
        return `Notebook: ${this.pagesNumber} - Size: ${this.size} - Type: ${this.type} - Cover: ${this.coverType}, material: ${this.coverMaterial}, created by: ${this.createdBy}, created at: ${this.createdAt}`;
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
            record: {
                createdBy: this.createdBy,
                createdAt: this.createdAt
            }
        }
    }
}