"use strict";
// array
// intellisense will tell us what are these variables data types are
let stringArr = ["one", "hey", "ab"];
let guitars = ["strat", "les paul", 5150];
let mixeddata = [1984, 'evh', true];
// and wont allow take give any other types of data to those array items
// stringArr[0] = true  // error
// stringArr.push(22) // error
// stringArr[0] = 'AB'  // no error
// stringArr.push('22') // no error
guitars[0] = 22;
guitars.unshift("a b");
// stringArr = mixeddata // error type mis matches
mixeddata = stringArr; // no error, cause mixedArray can have what stringArr has
let test2 = [];
// let bands: string = [] // error 
let bands = [];
bands.push("van halen");
// tuple
// if we want to be very specific about what specefic value an item should hold then we can make use of tuple
let myTuple;
myTuple = ["ab", 22, false];
// here mixed is of an union type of those three types, which is an optional and bit relaxed about its value, as long as they are among those three types unlike tuple where it needs to be of those threee type in exact order
let mixed = ['ab', 22, false];
mixed = myTuple; // no error, as values types from "myTuple" are allowed in "mixed"
// myTuple = mixed // error, cause mixed not necessarily not going to have those values always, and also not in same order as tuple is defnied as
// myTuple [3] = 42; // error, as 4th position is not defnied in this tuple
// myTuple[2] = 22; // error, number typed value is only allowed in 2nd position of this tuple
myTuple[1] = 23; // no error, as 2nd position is expecting of type number
// objects
let myObj;
myObj = []; // no error, cause in js array is also an type of object
console.log(myObj, "!!"); // object !!
myObj = bands; // no error, bands is an array of strings
myObj = {}; // no error
const exObj = {
    p1: 'ttys',
    p2: true
};
// if we miss any one of GFuitarist type prop value for this variable, it will throw an error
// let evh: Guitarist = {
//     name: "ab",
//     albums: [1984, 5150, 'OU812']
// }
// as all of Guitarist type props are present, so ts wont throw any error
let evh = {
    name: "ab",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "jimmy",
    active: true,
    albums: ["I", "II", 'IV']
};
evh = jp; // no error, as they are both of same type
jp = evh; // no error, as they are both of same type
let jpOpt = {
    name: "jimmy",
    albums: ["I", "II", 'IV']
};
const greetGuitarist = (guitarist) => console.log(`hello ${guitarist.name}`);
greetGuitarist(jp);
let jp2 = {
    active: true,
    albums: ["I", "II", 'IV']
};
const greetArtist = (guitarist) => {
    // without optional chaining for method use on "name" property which is optional, ts will throw error
    // return `hello ${guitarist.name} and again ${guitarist.name.toLocaleUpperCase()}`
    // we can also use narrowing type guard
    if (guitarist.name) {
        return `hello ${guitarist.name} and again ${guitarist.name.toLocaleUpperCase()}`;
    }
    return `hello!!`;
};
// Enums
// unlike most typescript features, enums are not a type level addition to javascript but something added to language and during runtime
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 0] = "U";
    Grades[Grades["D"] = 1] = "D";
    Grades[Grades["C"] = 2] = "C";
    Grades[Grades["B"] = 3] = "B";
    Grades[Grades["A"] = 4] = "A";
})(Grades || (Grades = {}));
console.log(Grades.U, Grades.A);
// value count will begin from 2 instead of 0 which is by default behavior
var Grades2;
(function (Grades2) {
    Grades2[Grades2["U"] = 2] = "U";
    Grades2[Grades2["D"] = 3] = "D";
    Grades2[Grades2["C"] = 4] = "C";
    Grades2[Grades2["B"] = 5] = "B";
    Grades2[Grades2["A"] = 6] = "A";
})(Grades2 || (Grades2 = {}));
console.log(Grades2.U, Grades2.A); // 2, 6
