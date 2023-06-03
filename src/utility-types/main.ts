// utility types

// partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignemnt = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assignment, ...propsToUpdate }
}

const asg1: Assignment = {
    studentId: "bu0410",
    title: "Final  project",
    grade: 0
}

console.log(updateAssignemnt(asg1, { grade: 90 }))
const asgGraded: Assignment = updateAssignemnt(asg1, { grade: 90 })

// required and readonly
// when using Required, we are telling ts to that all of those interface props are now required, even those are optional in interface
const recordAssignment = (assignment: Required<Assignment>): Assignment => {
    return assignment
}

const assignVerified: Readonly<Assignment> = {
    ...asgGraded, verified: true
}

// assignVerified.grade = false; // will throw error as assignVerified is of type ReadOnly and cant be chnaged after its been initialised

// recordAssignment(asg1); // ts will throw error as asg1 does not have verified defined in it and recordAssignment has Required in it for Assignment interface

recordAssignment({ ...asg1, verified: true }) // is fine as we are also passing on verified prop which completes Assignemnt interface and thus fulfills recordAssignment Require constraints


// Record
const hexColor: Record<string, string> = {
    red: "red",
    green: "green",
    blue: "blue"
}

type Students = "Kelly" | "Sara"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Kelly: "D",
    Sara: "C"
}

// types are used in order within Record will represent what Record will expects as key and value respectively
const testRec: Record<LetterGrades, Students> = {
    A: "Kelly",
    B: "Sara",
    C: "Kelly",
    D: "Sara",
    U: "Kelly"
}

// now using an interface
interface GradesStructure {
    assign1: number,
    assign2: number
}

const gradesData: Record<Students, GradesStructure> = {
    Kelly: { assign1: 22, assign2: 44 },
    Sara: { assign1: 21, assign2: 42 }
}

// interface GradesStruct {
//     subOne: string,
//     subTwo: string
// }

// const gradesData2 : Record<GradesStruct, Students> = {
//     {subOne: "whatever"} : "Kelly"  // not vaild
// }



// Pick and Omit

// Pick will only pick those of which were mentioned in second arguments from agiven type which is used as first argument in here
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = { grade: 3.6, studentId: "fo1010" }

// Omit will exclude those which were used in 2nd argument from type used in 1st argument
type assignPrev = Omit<Assignment, "grade">

const preview: assignPrev = { studentId: "tt00", title: "nice", verified: true }

type assignPrev2 = Omit<Assignment, "grade" | "verified">

const preview2: assignPrev2 = { studentId: "b008", title: "innit" }



// Exclude and Extract
// they wopnt be used with "interface" but rather with String Literals Unions types

// Exclude will keep everything else from Type except whats in 2nd argument
type ExcludedGrade = Exclude<LetterGrades, "U">

// Ectyract will keep only those in Unions in 2nd argument taken from Type used in 1st argument
type ExtractedGrades = Extract<LetterGrades, "A" | "B">



// Nonnullable
type AllNames = "A" | "B" | null | undefined
// NonNullable will only return values that are not non null
type NamesOnly = NonNullable<AllNames>



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

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

// by using ReturnType we can now bring any chnages to thjis aforementioned function and our NewAssignType will be updated according to its type
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("utility types", 101)

console.log( tsAssign )



// Parameters

// Parameters will create tuple Type, which means it will only accept values specefic to that type in that order
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs : AssignParams = ["Generics", 200]

const tsAssign2 : NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)



// Awaited - helps us with ReturnType of a Promise
interface User {
    id: string,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

// this will return type of Promises, but we what we need is result accruing from it and we can do so by using Awaited
// type FetchUsersTypeAwaited = ReturnType<typeof fetchUsers>

// after using Awaited we get type which is reuslting data from Promise
type FetchUsersTypeAwaited = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(data => console.log(data))