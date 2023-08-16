// GENERICS Usecase

interface IAuthor {
    id: number,
    name: string
}

type ICategoy = {
    id: number,
    title: string
}

interface IPost {
    id: number,
    title: string,
    description: string,
    // which is fine but not optimum, what if we need to have a different kind of data for this prop, for situations like thes GENERICS are being used
    extra: IAuthor[] | ICategoy[]
}

interface IGenericPost <T> {
    id: number,
    title: string,
    description: string,
    extra: T[]
}

const testGeneric: IGenericPost<String> = {
    description: "desc",
    extra: ["11"],
    id: 11,
    title: "title"
}

// Better Usecase Of Generics
interface IBetterGenericPost <T extends object> {
    id: number,
    title: string,
    description: string,
    extra: T[]   
}

type ExtraProps = IAuthor

const testBetterGeneric: IGenericPost<ExtraProps> = {
    description: "desc",
    extra: [{id: 11, name: "extra"}],
    id: 11,
    title: "title"
}

interface IUser {
    id:number,
    name: string
}

interface DeptUser extends IUser {
    dept: string
}

const iUserTest: IUser = {
    id: 11,
    name: "some user"
}

const deptUserTest: DeptUser = {
    dept: "department",
    id: 22,
    name: "some name"
}