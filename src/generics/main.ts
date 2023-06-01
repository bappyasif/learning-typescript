// just handles string type
const stringEcho = (arg: string): string => arg

console.log(stringEcho("f o"))

// handles any generic type
const echo = <T>(arg: T): T => arg
console.log(echo('tt'))

const isObj = <T>(arg: T): boolean => {
    const bool = typeof arg === "object"
        && (!Array.isArray(arg))
        && arg !== null
    return bool
}

console.log(isObj(true)) // false
console.log(isObj('John')) // false
console.log(isObj([1, 2, 3])) // false
console.log(isObj({ name: 'John' })) // true
console.log(isObj(null)) // false

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    } else if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    // !! turns into boolean
    return { arg, is: !!arg }
}

console.log(isTrue(false)) // {arg: false, is: false}
console.log(isTrue(0)) // {..., is: false}
console.log(isTrue(true)) // {..., is: true}
console.log(isTrue(1)) // {..., is: true}
console.log(isTrue('Dave')) // {..., is: true}
console.log(isTrue('')) // {..., is: false}
console.log(isTrue(null)) // {..., is: false}
console.log(isTrue(undefined)) // {..., is: false}
console.log(isTrue({})) // modified // {..., is: false}
console.log(isTrue({ name: 'Dave' })) // {..., is: true}
console.log(isTrue([])) // modified  // {..., is: false}
console.log(isTrue([1, 2, 3]))  // {..., is: true}
console.log(isTrue(NaN))  // {..., is: false}
console.log(isTrue(-0))  // {..., is: false}


// using interface

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    } else if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    // !! turns into boolean
    return { value: arg, is: !!arg }
}

console.log(checkBool([1, 2, 3]))  // {..., is: true}
console.log(checkBool(NaN))  // {..., is: false}
console.log(checkBool(-0))  // {..., is: false}


// using extends with interface while being generic type
interface HasId {
    id: number
}

// here by using extends we are narrowing Generic types value
// we are making sure that generic type her must be of type number
const processUser = <T extends HasId>(user: T): T => {
    // process user logic here....
    return user
}

console.log(processUser({ id: 22 })) // no error
// console.log(processUser({id: '22'})) // error, as it is not of type number as we have extended for out generic type


// using multiple generic type with extends
// consider T (user object) here as an object that has an ID
// K is going to be keys of T of that user object
const getUsersProperties = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    // an array of user objects and we've identified key as K
    // also noticed that we're dynamically accessing key value from this user object of type T, because we have included that "keyof" assertion in our second extends defninition
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

console.log(getUsersProperties(usersArray, "email"))
console.log(getUsersProperties(usersArray, "website"))


// usecase for generic in class structure
class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

// once given a value, ts will consider that as valid data type anything else will throw error
const store = new StateObject("f o");
console.log(store.state)
store.state = "A B"
console.log(store.state)
// store.state = 2 // doesnt match with already infered data type which is string

// const myStore = new StateObject<number | string | boolean | "f o">("titi") // no error, as string is a valid type set using generic type
// const myStore = new StateObject<(number | string | boolean) []>("titi") // error data type mismatches
const myStore = new StateObject<(number | string | boolean)[]>(["titi"]) // no error, ad mtype matches correctly
myStore.state = (["bb", 21, true]); // no error as data matched correctly with defined generic type definition at instantiation
console.log(myStore.state)