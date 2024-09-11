import { Prototype } from "./prototype.interface"

export class Commit implements Prototype<Commit> {

    constructor(
        private readonly _id: string,
        private readonly _dateStamp: number,
        private readonly _comment: string,
        private readonly _previousCommit?: Commit,
    ) {
        console.log(`commit with [${this._id}] was created. Comment: ${this._comment}`,);
    }

    public getID(): string {
        return this._id
    }

    public clone(): Commit {
        const prevCommitCloned = this._previousCommit?.clone()
        return new Commit(this._id, this._dateStamp, this._comment, prevCommitCloned)
    }

    public printLog() {

        this._previousCommit && this._previousCommit.printLog()

        console.log(`[id]       -> `, this._id)
        console.log(`[date]     -> `, new Date(this._dateStamp))
        console.log(`[comment]  -> `, this._comment)
        console.log(`\n`)

    }

    public getPreviousCommit(): Commit | undefined {
        return this._previousCommit
    }

}