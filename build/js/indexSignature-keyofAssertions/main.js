"use strict";
// index signatures
// useful when we creating an object but we dont know exact names of those object keys
// but we know shape of that object and can declare type of keys and type of values
// also useful when we intent to access an object proiperty dynamically
// will throw error as property "Job" is missing
// const todaysTransaction: TransactionObj = {
//     Pizza: -11,
//     Books: -6,
// }
const todaysTransaction = {
    Pizza: -11,
    Books: -6,
    Job: 22
};
console.log(todaysTransaction.Books, todaysTransaction["Pizza"]);
const prop = "Pizza";
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
todaysTransaction.Pizza = 22; // permissible, as its not readable
// todaysTransaction.Pizza2 = 22 // not permissible, as its only readable
// throws no error but will return undfined as this key does not exist in todaysTransaction
// ts doesnt throw error as key is of type "string"
console.log(todaysTransaction.ab); // no error as key type matches in signature
const student = {
    name: "ttys",
    gpa: 3.6,
    classes: [110, 200]
};
// console.log(student.ttys) // undefined, but no error is thrown as index signature matches just fine
console.log(student["ttys"]); // undefined, but no error is thrown as key of assetion is in place
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
// whe we dont know type of that object then we can use tyoef along with keyof to access dynamic key value from an object
Object.keys(student).forEach(key => console.log(student[key]));
// using keyof in function parameter to remove its usecase while accessing dynamic key value from an object
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "classes"); // you can only access key from student object anything else will throw error
const monthlyIncomes = {
    bonus: 100,
    salary: 500,
    sidehustle: 220
};
for (const key in monthlyIncomes) {
    console.log(`${key} : ${monthlyIncomes[key]}`);
    console.log(`${key} : ${monthlyIncomes[key]}`);
}
