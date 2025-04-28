export type WingsParams = {
    material: string;
    size: string;
}

// type first = {
//     one: number;
//     two: string;
//     three: {
//         four: string,
//         five: n confiumber,
//     }
// }
// type Identity<T> = { [P in keyof T]: T[P] }
// type Replace<T, K extends keyof T, TReplace> = Identity<Pick<T, Exclude<keyof T, K>> & {
//     [P in K] : TReplace
// }>
// type second = Replace<first, 'three', Replace<first['three'], 'five', number[]>>
// let d: second = {
//     one: 1,
//     two: "",
//     three : {
//         four: "",
//         five: [1, 2, 3]
//     }
// }
