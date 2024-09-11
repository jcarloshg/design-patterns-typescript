import { Commit } from "./Commit";
import { randomUUID } from "crypto";
import { Prototype } from "./prototype.interface";

export class Branch implements Prototype<Branch> {

    constructor(
        private _name: string,
        private _lastCommit?: Commit
    ) {
        console.log(`branch with [${this._name}] was created.`,);
    }

    public createCommit(message: string) {
        const newCommit = new Commit(randomUUID(), Date.now(), message, this._lastCommit)
        this._lastCommit = newCommit;
    }

    public printLogs() {
        console.log(`// ============================================================`);
        console.log(`// ${this._name} `);
        console.log(`// ============================================================`);
        console.log(`\n`)
        this._lastCommit?.printLog()
    }

    public clone(): Branch {
        const lastCommitCloned = this._lastCommit?.clone()
        return new Branch(this._name, lastCommitCloned)
    }

    public changeName(name: string): void {
        this._name = name
        console.log(`branch's name [${this._name}] was changed by [${name}]`,);
    }

    public popCommit() {

        if (!this._lastCommit) {
            console.log("There are not commits");
            return;
        }

        const prevCommit = this._lastCommit.getPreviousCommit()
        console.log(`[drop the commit] -> `, this._lastCommit.getID());
        delete this._lastCommit
        this._lastCommit = prevCommit
    }

}