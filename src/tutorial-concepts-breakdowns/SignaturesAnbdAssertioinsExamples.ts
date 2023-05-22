// index signatures
// its used when we dont know beforehand what property we will be using or value will be for that matter

// an example of a valid inteface and instance created out of it
// interface TransactionObj {
//     pizza: number,
//     books: number,
//     job: number
// }

// const todaysTransaction: TransactionObj = {
//     pizza: -20,
//     books: -22,
//     job: 42
// }

// console.log(todaysTransaction.pizza) // -20
// console.log(todaysTransaction['pizza']) // -20
// const prop : string = 'pizza';
// console.log(todaysTransaction[prop])  // error, no signatures available

// now usecase of dynamically tryig to access this instance
// interface TransactionObj {
//     // index signature, where all keys are string type and values are number type
//     // now we can use this interface to dynamically access properties or value from its instances
//     // [index:string] : number
//     // we can use readonly so that we can not change its value from elsewhere
//     readonly [index:string] : number

// }

// const todaysTransaction: TransactionObj = {
//     pizza: -20,
//     books: -22,
//     job: 42
// }

// console.log(todaysTransaction.pizza) // -20
// console.log(todaysTransaction['pizza']) // -20
// const prop : string = 'pizza';
// console.log(todaysTransaction[prop])  // no error, as signatures available

// const todaysNet = (transactions: TransactionObj) : number => {
//     let total = 0;
//     for( const transaction in transactions) {
//         total += transactions[transaction]
//     }
//     return total
// }

// console.log(todaysNet(todaysTransaction))
// // todaysTransaction.pizza = 40 // value cant be cahnged as its only readonly
// console.log(todaysTransaction['ab']) // will show undefined as it doesnt being defined as a property but ts doesnt complain as it meets signature

// consider when we can have more than just those three properties and more
interface TransactionObj {
    // index signature, where all keys are string type and values are number type
    // now we can use this interface to dynamically access properties or value from its instances
    // [index:string] : number
    // we can use readonly so that we can not change its value from elsewhere
    readonly [index:string] : number,
    pizza: number,
    books: number,
    job: number
}

const todaysTransaction: TransactionObj = {
    pizza: -20,
    books: -22,
    job: 42,
    ab: .2
}

console.log(todaysTransaction.pizza) // -20
console.log(todaysTransaction['pizza']) // -20
const prop : string = 'pizza';
console.log(todaysTransaction[prop])  // no error, as signatures available

const todaysNet = (transactions: TransactionObj) : number => {
    let total = 0;
    for( const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransaction))
// todaysTransaction.pizza = 40 // value cant be cahnged as its only readonly
console.log(todaysTransaction['ab']) // will show undefined as it doesnt being defined as a property but ts doesnt complain as it meets signature


interface Student {
    // [key: string]: string | number | number[] | undefined,
    name: string, 
    gpa: number,
    classes?: number[]
}

const student: Student = {
    name: 'ab',
    gpa: 2,
    classes: [100, 200]
}

// console.log(student.test) // potential for undefined value, as index type also includes undefined as a valid type there

for(const key in student) {
    // console.log(`${key}: ${student[key]}`) // ts wont mind as long as we have a defined index that matches this dynamic access
    console.log(`${key}: ${student[key as keyof Student]}`) // we can make use of keyof keyword to alllow dynamjic access when there is no "index" defined in interface
}

// another way of using keyof keyword
// we are saying key would be a key of student type object
Object.keys(student).map(key => console.log(`${key} : ${student[key as keyof typeof student]}`))

// another usecase for keyof
const logKeys = (student: Student, key: keyof Student) : void => {
    console.log(`${key}: ${student[key]}`)
}

console.log(logKeys(student, 'classes')) // [100, 200]

// another way of defning index signature other than in interface
interface Incomes {
    [key: string]: number
}

type Streams = 'salary' | 'bonus' | 'sidehustles'

type IncomesType = Record<Streams, number>

const monthlyIncomes: IncomesType = {
    salary: 220,
    bonus: 220,
    sidehustles: 220
}

for(const key in monthlyIncomes) {
    console.log(`${key} : ${monthlyIncomes[key as keyof IncomesType]}`)
}