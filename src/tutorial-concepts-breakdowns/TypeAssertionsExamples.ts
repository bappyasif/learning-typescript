type One = string
type Two = string | number
type Three = 'hallo'

// convert to more or less specific type
let a: One = 'hoi hoi'
let b = a as Two // less specific
let c = a as Three // more specific

// as alternatively being used for type assertions
let d = <One>'world'
let e = <Two>'wereld'
let f = <string | number>'wereld'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): (number | string) => {
    if (c === 'add') return a + b

    return '' + a + b
}

// let myVal: string = addOrConcat(2, 2, "concat") // not happpy as it could return either string or number and we denoted myValk to be of type "string" specifically
let myVal: string = addOrConcat(2, 2, "concat") as string // if define return type to be "string" only then ts dont mind

// it is wrong cause "function will return string", just because we told ts to take our type assertions as valid, it does not complain here buyt will produce an errorneous output
let wrongVal: number = addOrConcat(2, 2, "concat") as number

// 10 as string // ts will throw error, as number cant be a string
(10 as unknown) as string // double casting

// type assertions can be very useful when working with DOM
const img = document.querySelector("img")! // non null assertion
const img2 = document.getElementById("myImg") as HTMLImageElement // more specificaly type asserted to let ts know that its gng to be an image element so "img" related properties will be accessible
// this way is not going to work in tsx or react as it will coinsider it to be "html node"
const img3 = <HTMLImageElement>document.getElementById("myImg")

img.src
img2.src
img3.src

// given problem
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// my variation attempted solution
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// variation een
// let year: HTMLElement | null
// year = document.getElementById("year");

// let thisYear: string
// thisYear = new Date().getFullYear().toString();

// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// variation twee
const year = document.getElementById("year") as HTMLElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear)
year.textContent = thisYear