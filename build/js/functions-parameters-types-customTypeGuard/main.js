"use strict";
// type aliases
// this wont just do with interfaces, "think of interface as classes or objects"
// interface PostId = strOrNum; // error
// literal types
let myName;
// myName = 'A B' // error, my name is only allowed to be of value "ab" which is a string literal
let username2;
// username2 = "gg"; // error, username2 is only allowed to have those string literals values and nothing else
username2 = "A B";
// functions
const add = (a, b) => a + b;
// as its not returning anything from this function, its return type is going to be void
const logMsg = (msg) => console.log(msg);
logMsg('hello');
logMsg(add(2, 3));
// logMsg(add(2,'3')); // error, type is not number for parameter value of b
const subtract = function (c, d) {
    return c - d;
};
const mult = (c, d) => c * d;
logMsg(mult(2, 2));
const divide = (e, f) => e / f;
logMsg(divide(4, 2));
// note: using interface for classes makes more sense, 
// noite: using "type" for functions and everything else makes more sense
// optional parameters
const addAll = (a, b, c) => {
    // using a type guard so that ts doesnt throw any error for optional parameter in this function
    // optional parameter must be in last of list, it can be elsewhere
    // required parameters needs to be ahead of "optional parameters"
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// with default parameters value
const sumAll = (a, b, c = 2) => a + b + c;
logMsg(addAll(3, 2, 2));
logMsg(addAll(3, 2));
logMsg(sumAll(3, 2));
const sumAll2 = (a = 11, b, c = 2) => a + b + c;
// logMsg(sumAll2(2)) // error, required pareameter of "b" is missing
logMsg(sumAll2(undefined, 2)); // no error, if we're using default parameter anywhere but "at last" of list, then we have to use "undefined" to skip its value and use default value used in function definition
// with default parameters, function signature wont work!!
// type mf = (a: number = 20, b: number) => number
// rest parameters
const total = (...nums) => nums.reduce((acc, curr) => acc + curr);
logMsg(total(1, 2, 3, 4)); // 10
const total2 = (a, ...nums) => a + nums.reduce((a, c) => a + c, 0);
logMsg(total2(1, 2, 3, 4)); // 10
logMsg(total2(1, 2)); // 3
// will throw error cause rest parameters should be used last or only, of parameters list
// const total3 = (...nums: number[], b:number): number => a + nums.reduce((a, c) => a + c, 0)
// never type
// when throwing an error we get a never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// when running an infinite loop we get a never type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// just getting a never type is not recommended here and rather break this inifinite loop when possible
// when we add a break loop code in this infinite loop the return type becomes void, which is far better than having an infinite loop runnig within any code
const infinite2 = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard usecase
const isNum = (v) => typeof v === "number" ? true : false;
// an useful usecase of never type
const numbOrStr = (value) => {
    // using type guard to make sure to return appropriate return value
    if (typeof value === "string")
        return "string";
    // if (typeof value === "number") return "number"
    if (isNum(value))
        return "number";
    // as this function needs a string type return, we cna t let that hanging without that
    // now we can make use of our createError function which is a never type but returns a string from that createError function
    return createError("this should never happen!!");
};
