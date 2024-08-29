
export interface Clothe {
    readonly name: string,
    readonly size: "l" | "s" | "m",
}

export interface Boat extends Clothe { }

export interface Sweater extends Clothe { }
