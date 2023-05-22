// generics are useful and used for scenarios where we wnat keep our types as generic as possible and not tied to any specific type
// exaple of a string return type function
const echoStr = (a: string): string => a
const echoGeneric = <T>(a: T): T => a

const isObj = <T> (arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true)) // false
console.log(isObj('true')) // false
console.log(isObj(2)) // false
console.log(isObj([true, 2])) // false
console.log(isObj(null)) // false
console.log(isObj({a: 'a b'})) // true

const isTrue = <TT>(arg: TT): { arg: TT, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {
            is: false,
            arg
        }
    }

    if(isObj(arg) && !Object.keys(arg as keyof TT).length) {
        return {
            is: false,
            arg
        }
    }
    return {
        is: !!arg, // double nmegation to get a boolean response out of it
        arg: arg
    }
}

console.log(isTrue(false)) // false
console.log(isTrue(0)) // false
console.log(isTrue(true)) // true
console.log(isTrue(1)) // true
console.log(isTrue('aa')) // true
console.log(isTrue('')) // false
console.log(isTrue({})) // false
console.log(isTrue({name: "a b"})) // true
console.log(isTrue([])) // false
console.log(isTrue([1, 2])) // true
console.log(isTrue(NaN)) // false
console.log(isTrue(-0)) // false


// defining types with interface
interface boolCheck <TT> {
    is:  boolean,
    value: TT
}

const isTrueWithInterface = <TT>(arg: TT): boolCheck<TT> => {
    if(Array.isArray(arg) && !arg.length) {
        return {
            is: false,
            value: arg
        }
    }

    if(isObj(arg) && !Object.keys(arg as keyof TT).length) {
        return {
            is: false,
            value: arg
        }
    }
    return {
        is: !!arg, // double nmegation to get a boolean response out of it
        value: arg
    }
}

// example with type extends
interface HasId {
    id: number
}

// now by using extends we narrowing generic types, that processUser now has to have an "id"
const processUser = <TT extends HasId> (user: TT) : TT => {
    // logic goes here, todo
    return user
}

console.log(processUser({id: 1, name: 'ab'})) // valid
// console.log(processUser({name: 'ab'})) // in-valid, it must needs an "id"

// as we are using K as keyof TT we dont have assert before dynamic access
const getUserProperty = <TT extends HasId, K extends keyof TT> (users: TT[], key: K): TT[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUserProperty(usersArray, "email"))
console.log(getUserProperty(usersArray, "username"))

// genric usecase with class
class StateObject<TT> {
    private data: TT

    constructor(value: TT) {
        this.data = value
    }

    get state(): TT {
        return this.data
    }

    set state(value: TT) {
        this.data = value
    }
}

const store = new StateObject("john")
console.log(store.state) // john
store.state = 'ab'
console.log(store.state) // ab

// we are saying type can be an array of either string, numbert or boolean beore ts inference
const anotherStore = new StateObject<(string | number | boolean)[]>([22])
anotherStore.state = ["ab", 22, false]
console.log(anotherStore.state) // ["ab", 22, false]