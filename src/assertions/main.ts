// term type assertions and type casting is used ingterchangeably

// type assertions is used and useful when ts doesnt know what its gng to return

// when we are working with DOM, type assertions becomes vital as ts wont know any more than our working DOM as its our app and we would know what to expecvt anbd consequently return from it


type One = string;
type Two = string | number;
type Three = 'hallo'

// converting to more or less specefic type assertions
let a1: One = "a"
let b1 = a1 as Two; // less specefic type assertion
let c1 = a1 as Three; // more specific type assertion

// assertions using angle brackets
// using this type of type assertion in recat file wont work because in react when we use ">" it wiil create an element whatever is within that "<>"
let d = <One>'hallo'
let e = <string | number>'world'

const addorConcat = (a: number, b: number, c: "add" | "concat") => {
    if(c === "add") return a + b

    return "" + a + b
}

// we specifying to ts this instance will return a string type value, by using keyword "as" and then type
const chckVal: string = addorConcat(2, 2, "concat") as string

// be warned: ts sees no error here but we know that a "string" is returned here
// we need to be careful when we are asserting something, we must be sure of it
const chckNxt: number = addorConcat(2, 2, "concat") as number

// ts will check assertions whenever it can
// 10 as string

// two assertions, double casting, will overule ts default type check assertion, but not recommended
(10 as unknown) as string



// DOM
// const img = document.querySelector("img");  // image element
const img = document.querySelector("img")! // using non null assertion, meaning we're telling ts that this element exists on DOM
const img2 = document.querySelector("#myImg"); // element
// const img3 = document.getElementById("myImg"); // html element
const img3 = document.getElementById("myImg") as HTMLImageElement;  // asserting as image element
const img4 = <HTMLImageElement>document.getElementById("myImg"); // asserting as image element

img.src
img3.src
img4.src