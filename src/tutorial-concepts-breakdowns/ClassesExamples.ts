// exhibits much redundant codes for defining some class property, as it neds to be included beforehand in constructor as well
class Coder {
    name: string
    music: string
    age: number
    lang: string

    constructor(
        name: string,
        music: string,
        age: number,
        lang: string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}

// by using modifiers we dont have to include it outside of constructor namespace
// we can also use multiple modifiers for any class property
// we have these four modifiers public, readonly, private, protected
export class CoderWithVisibilityModifiers {
    // by using this ! we are telling ts class component that we will use it some time in future but not initially in constructor
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        // protected lang: string
        protected lang: string = "Typescript" // using default value so that we dont have to provide this value evrytime we create an instance of this class
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    getAge() {
        return this.age
    }

    render() {
        return (
            null
        )
    }

}

const aa = new CoderWithVisibilityModifiers('ab', 'varities', 21)
aa.getAge()
// console.log(aa.age, aa.lang) // protected and private properties not accessible from outside of class component itself
// nb: private properties r not accesible only from class itself but protected properties are accessible classes that extends that given class where it initially belonged to

class WebDev extends CoderWithVisibilityModifiers {
    constructor(
        public computer: string,
        public name: string,
        music: string,
        age: number
    ) {
        // when extending super needs to be called before initializing any properties values
        super(name, music, age)
        this.computer = computer
    }

    //  as lang is proteced in base class we will access this from here as extrends base class
    public getLang() {
        return this.lang
    }
}

const bb = new WebDev("mac", "hoxie", "techno", 24)
bb.getLang()
// console.log(bb.age, bb.lang)


// proper class component usecase with interface
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    // name: number
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name,
            this.instrument = instrument
    }

    public play(action: string): string {
        return `${this.name} ${action} this ${this.instrument} `
    }
}

const paige = new Guitarist('rabby', 'guitar')
paige.play('strums')

// using static class component
// static elements are only can be accesed usig class it self and not from any of its instances
class Peeps {
    static count: number = 0
    static getCount() {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        // this.id = Peeps.count++ // first instance count: 0
        this.id = ++Peeps.count  // first instance count: 1
    }
}

const john = new Peeps("john");
const smith = new Peeps("smith");
const doyle = new Peeps("doyle");
console.log(doyle.id) // 3
console.log(smith.id) // 2
console.log(john.id) // 1
// console(john.count) // there is no public variable called count to access by this or any other instance from this class component
console.log(Peeps.count) // 3

// with setter and getter
class Bands {
    private dataState: string[]
    constructor() {
        this.dataState = []
    }

    get data(): string[] {
        return this.dataState
    }

    // set data(dataset: string[]) {
    //     this.dataState = dataset
    //     return
    // }
    set data(dataset: string[]) {
        if (Array.isArray(dataset) && dataset.every(el => typeof el === "string")) {
            this.dataState = dataset
            return
        } else throw new Error("dataset is not comprises of all strings")
        
    }
}

const favs = new Bands();
favs.data = ['artcell', 'nemesis']
console.log(favs.data)
favs.data = [...favs.data, 'ark']
console.log(favs.data)
// favs.data = ['bootay', 101] // throw error as its not all strings inside that array