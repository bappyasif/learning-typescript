"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignemnt = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const asg1 = {
    studentId: "bu0410",
    title: "Final  project",
    grade: 0
};
console.log(updateAssignemnt(asg1, { grade: 90 }));
const asgGraded = updateAssignemnt(asg1, { grade: 90 });
// required and readonly
// when using Required, we are telling ts to that all of those interface props are now required, even those are optional in interface
const recordAssignment = (assignment) => {
    return assignment;
};
const assignVerified = Object.assign(Object.assign({}, asgGraded), { verified: true });
// assignVerified.grade = false; // will throw error as assignVerified is of type ReadOnly and cant be chnaged after its been initialised
// recordAssignment(asg1); // ts will throw error as asg1 does not have verified defined in it and recordAssignment has Required in it for Assignment interface
recordAssignment(Object.assign(Object.assign({}, asg1), { verified: true })); // is fine as we are also passing on verified prop which completes Assignemnt interface and thus fulfills recordAssignment Require constraints
// Record
const hexColor = {
    red: "red",
    green: "green",
    blue: "blue"
};
const finalGrades = {
    Kelly: "D",
    Sara: "C"
};
// types are used in order within Record will represent what Record will expects as key and value respectively
const testRec = {
    A: "Kelly",
    B: "Sara",
    C: "Kelly",
    D: "Sara",
    U: "Kelly"
};
const gradesData = {
    Kelly: { assign1: 22, assign2: 44 },
    Sara: { assign1: 21, assign2: 42 }
};
const score = { grade: 3.6, studentId: "fo1010" };
const preview = { studentId: "tt00", title: "nice", verified: true };
const preview2 = { studentId: "b008", title: "innit" };
// ReturnType
// usual way of using Type for return type assertions which is fine
// but if for some reason we needed to update this createNewAssign function then we would have to re adjust this NewAssign type as well, which could be an inconvenient at some time, but using ReturnType will solve this problem
// type NewAssign = {
//     title: string,
//     points: string
// }
// const createNewAssign = (title: string, points: string): NewAssign => {
//     return { title, points }
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("utility types", 101);
console.log(tsAssign);
const assignArgs = ["Generics", 200];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(data => console.log(data));
