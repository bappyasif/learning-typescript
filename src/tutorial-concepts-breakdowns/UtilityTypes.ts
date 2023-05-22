// partrial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// required and readonly type

// now by using Required we are making all of Assignemnt interface to be required even those which are optional
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

// assignVerified.grade = 80 // as assignVerified is only readonly
// recordAssignment(assignGraded) // not possible as assignGraded does not have all of Assignmentg properties
recordAssignment({...assignGraded, verified: true}) // now its fine as it has alll of its properties

// Record
const hexcolorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradesData: Record<Students, Grades> = {
    Sara: {assign1: 88, assign2: 78},
    Kelly: {assign1: 78, assign2: 22}
}

// pick and omit
// we are picking our choices from already defined Assignment interface
type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
    studentId: "ab12",
    grade: 22
}

// by using Omit we are exluding those mentioned properties just opposite of Pick would have done
type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "ab12",
    title: "final project"
}


// Exclude and Extract
// these are based on String Literals and not Iterfaces
type adjustedGrades = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">


// Nonnullable
// by using NonNullable we are exluding any null or undefined from String Literal types
type AllPossibleGrades = "a" | "b" | null | undefined
type namesOnly = NonNullable<AllPossibleGrades>



// ReturnType
// normal type inference at function type defnition
// type newAssign = {title: string, points: number}
// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points}
// }

// but instead we can use ReturnType to make it more flexible, as in if we need to make any changes to function and its parameters, we wont have to chnage it in type declaration as well
// type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number) => {
    return {title, points}
}
type NewAssign = ReturnType<typeof createNewAssign> // by doing this our function return type is more dynamic and can decide its acceptable return type right here rather than previously defined upfront

const tsAssign: NewAssign = createNewAssign("Utility Types", 22)
console.log(tsAssign)



// Parameters
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["generics", 22]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)


// Awaited
// helps us with ReturnType of a Promise
interface User {
    id: string,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).catch(err => err instanceof Error && console.log(err.message))
    return data
}
// now we want to define type with a return type for fetchUsers function
// type FetchUsersReturnType = ReturnType<typeof fetchUsers> // this will return an array of Users array Promises but we want "users array" returned from it
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>> // now we will get return type of users array after wrapping it within Awaited
fetchUsers().then(data => console.log(data))