// index signatures
// useful when we creating an object but we dont know exact names of those object keys
// but we know shape of that object and can declare type of keys and type of values
// also useful when we intent to access an object proiperty dynamically

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

// const todaysTransaction: TransactionObj = {
//     Pizza: -11,
//     Books: -6,
//     Job: 22
// }

// console.log(todaysTransaction.Books, todaysTransaction["Pizza"])

// const prop: string = "Pizza"
// console.log(todaysTransaction[prop]) // ts throws error, no index signature with a parameter of string type is found

// const todaysNet = (transactions: TransactionObj) : number => {
//     let total = 0;
//     for(let transaction in transactions) {
//         // ts throws error same as above mentioned "prop" usecase, saying No index signature with a parameter of type 'string' was found on type 'TransactionObj'
//         total += transactions[transaction]
//     }
//     return total
// }


// // using signature
// interface TransactionObj {
//     // [index: string] : number
//     readonly [index: string] : number // re-assignments becomes invalid
// }

// const todaysTransaction: TransactionObj = {
//     Pizza: -11,
//     Books: -6,
//     Job: 22
// }

// console.log(todaysTransaction.Books, todaysTransaction["Pizza"])

// const prop: string = "Pizza"
// console.log(todaysTransaction[prop])

// const todaysNet = (transactions: TransactionObj) : number => {
//     let total = 0;
//     for(let transaction in transactions) {
//         total += transactions[transaction]
//     }
//     return total
// }

// console.log(todaysNet(todaysTransaction))
// // todaysTransaction.Pizza = 22 // not permissible, as its only readable

// // throws no error but will return undfined as this key does not exist in todaysTransaction
// // ts doesnt throw error as key is of type "string"
// console.log(todaysTransaction.ab) // no error as key type matches in signature
// // console.log(todaysTransaction.11) // error as key type doesn not match in signature


// using signature
interface TransactionObj {
    readonly [index: string] : number, // re-assignments becomes invalid
    // it will require these three properties and can have more with that matches this signature defined above
    Pizza: number,
    Books: number,
    Job: number
}

// will throw error as property "Job" is missing
// const todaysTransaction: TransactionObj = {
//     Pizza: -11,
//     Books: -6,
// }

const todaysTransaction: TransactionObj = {
    Pizza: -11,
    Books: -6,
    Job: 22
}

console.log(todaysTransaction.Books, todaysTransaction["Pizza"])

const prop: string = "Pizza"
console.log(todaysTransaction[prop])

const todaysNet = (transactions: TransactionObj) : number => {
    let total = 0;
    for(let transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransaction))
todaysTransaction.Pizza = 22 // permissible, as its not readable
// todaysTransaction.Pizza2 = 22 // not permissible, as its only readable

// throws no error but will return undfined as this key does not exist in todaysTransaction
// ts doesnt throw error as key is of type "string"
console.log(todaysTransaction.ab) // no error as key type matches in signature
// console.log(todaysTransaction.11) // error as key type doesn not match in signature



//////////////////////////////
////// key of assertions /////
//////////////////////////////

interface Student {
    // index signature covers all required variables, thus lets dynamically access keys value, and returns undefine when not found
    // [index: string]: string | number | number[] | undefined
    name: string,
    gpa: number,
    classes?: number[]  // optinal property
}

const student: Student = {
    name: "ttys",
    gpa: 3.6,
    classes: [110, 200]
}

// console.log(student.ttys) // undefined, but no error is thrown as index signature matches just fine

console.log(student["ttys" as keyof Student]) // undefined, but no error is thrown as key of assetion is in place

for(const  key in student) {
    console.log(`${key} : ${student[key as keyof Student]}`)
}

// whe we dont know type of that object then we can use tyoef along with keyof to access dynamic key value from an object
Object.keys(student).forEach(key => console.log(student[key as keyof typeof student]))

// using keyof in function parameter to remove its usecase while accessing dynamic key value from an object
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key} : ${student[key]}`)
}

logStudentKey(student, "classes") // you can only access key from student object anything else will throw error


//////////////////////////////////////
/////// another keyof usecase ////////
//////////////////////////////////////

// interface incomes {
//     // [key: string]: number // valid signature
//     // [key: "test"]: number // invald signature, cant use string literals in type
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

// by using Record utility we can use any additional String literals as keys
// here it depicts as Incomes will have "Streams" keys which will have a value of type "number"
// here is a drawback as well, as were able to specifically difened any "key" value type, using this structure wont allow us to di that
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    bonus: 100,
    salary: 500,
    sidehustle: 220
}

for(const key in monthlyIncomes) {
    console.log(`${key} : ${monthlyIncomes[key as keyof Incomes]}`)
    console.log(`${key} : ${monthlyIncomes[key as keyof typeof monthlyIncomes]}`)
}