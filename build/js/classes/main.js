"use strict";
// basic variable initialization using class structure
// class Coder {
//     name: string
//     constructor(name:string) {
//         this.name = name
//     }
// }
// class structure using data modifer / visibility modifier / access modifer / visibility members
// class Coder {
//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
class Coder {
    constructor(name, // readonly means t can not be changed after instantiating
    music, age, // accessible within class scope and not outside of it
    lang = "Typescript" // providing a default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hi ${this.name}, ${this.age} old`;
    }
}
// as we have given 4th param a default vslue in constructor we didnt have to pass it in instantiation
const ab = new Coder("ab", "variety", 37);
console.log(ab.getAge()); // valid access
// console.log(ab.age) // invalid access as "age" is private and can only be accessed from class scope only
// console.log(ab.lang) // invalid access as "lang" is protected and can only be accessed from class and subclass scope only
class WebDev extends Coder {
    constructor(name, music, age, computer) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        // lang is accessible as it is marked as Protected in Coder class and can be accessible in among al of its sub-classes
        return `accessing language from base class: ${this.lang}`;
    }
}
const AB = new WebDev("AB", "variety", 37, "Dual Boot");
console.log(AB.getLang());
console.log(AB.getAge());
console.log(AB.music); // valid access
class Guitaristt {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} this ${this.instrument}`;
    }
}
const aB = new Guitaristt("a b", "strings instruments");
console.log(aB.play("riffing"));
//////////////////////
// Static class     //
//////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count; // pre-increment count
        this.name = name;
    }
}
// when denoted as "static" that class variable or properties are only refered using Class Name instead of keyword "this"
// here this count will keep track of any number of count in this class but not for any "instances" of this class
Peeps.count = 0;
const a_b = new Peeps("a b");
console.log(Peeps.getCount());
console.log(Peeps.count);
const _ab = new Peeps("a b");
console.log(Peeps.getCount());
console.log(Peeps.count);
console.log(a_b.id, _ab.id);
/////////////////////////////////////
////////// setter getter ///////////
/////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(items) {
        const checkItems = () => items.every(val => typeof val === "string");
        if (Array.isArray(items) && checkItems()) {
            this.dataState = items;
        }
        else {
            throw new Error("param is not completely an array of strings");
        }
    }
}
const myBands = new Bands();
console.log(myBands.data);
myBands.data = ["Iron Maiden", "Metallica"];
console.log(myBands.data);
// myBands.data = [1, 2] // invalid contents
// myBands = "22" // invalid param data type
// myBands.data = ["Iron Maiden", 2250] // invalid contents
