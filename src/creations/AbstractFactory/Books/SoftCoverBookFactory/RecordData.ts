export class RecordData {
    constructor(
        public readonly createdBy: string = "SoftCoverBookFactory",
        public readonly createdAt: Date = new Date(),
    ) { }
}