// tsc main.tsc -w     // for watch mode
// tsc -w  // we dont have to specifiy any more ts file spicifically after we've configured "root" and "outdir" from "tsconfig.json", which shows up after typing "tsc --init" in termina from root folder
// when runnig this watch mode ts will create a js folder in build folder as we mentioned in tsconfig file and it will be watching over any ts files from "src" folder as mentioned in "rootDir" from tsconfig.json file

let username = "ab!!";
console.log(username)

// ts is infering from these values of their types, and correspondingly deciding on their operations validity
// let a = 4;
// let b = '2';
// let c = 2;

// to stop ts compiler to compile typed error files in build folder we can chnage "noEmitOnError" to true in "tsconfig" file

// console.log(a/b) // even though valid js but ts will complain as numbers are not divisible by string type value

// byt specefying type upfront it helps us to avoid any type mismatch error during buildtime give us opportunity to fix them during development time
// let a:number = 4;
// let b: number = '2';
// let c: number = 2;

let a:number = 4;
let b: number = 2;
let c: number = 2;

console.log(b * c)

// we can also use "noEmitOnError" with our watch flag in terminal as well, which will override whatever default "value" of it and throw error and wont compile file to js files, "tsc --noEmitOnError -w"

// let smVal: any;

// as paramters type is "any" and its not a recommended ts type, even tough sometimes it might be necessary to use it a t times
// const sum = (a,b) => a + b

// ts infers it will return a number
// const sum = (a:number, b:number) => a + b

// ts infers it will return a string
const sum = (a:number, b:string) => a + b

// union type, it allows vakues to be either strimg or number typed, anything else will throw an error
let album : string | number;

// union type can have multiple types
let isActive : boolean | number | string

// if hover mouse opver to vatiable it intellisense will show use type is that of
// let exp = /\w/g

let exp: RegExp = /\w/g