export abstract class NoteBook {
    constructor(
        public readonly pagesNumber: number,
        public readonly size: "A4" | "A5",
        public readonly type: "square" | "lined" | "dotted",
    ) { }

    public toString(): string {
        return `NoteBook: ${this.pagesNumber}, size: ${this.size} pages with ${this.type} type.`;
    }

    public abstract toObject(): NoteBookObject;
}


export type NoteBookData = Pick<NoteBook, "pagesNumber" | "size" | "type">;

export type NoteBookObject = {
    metadata: Pick<NoteBook, "pagesNumber" | "size" | "type">,
    [key: string]: any
}