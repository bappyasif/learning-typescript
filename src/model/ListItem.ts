export interface Item {
    id: string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {
    constructor(
        private _id: string = "",
        private _item: string = "",
        private _checked: boolean = false
    ) {
        // as we are passing default vaue in constructor parameters definition we dont have to specifically include indie constrictor block once again, it will just make it double of same thing pretty much but valid syntax
    }

    get id (): string {
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get item (): string {
        return this._item
    }

    set item(value: string) {
        this._item = value
    }

    get checked (): boolean {
        return this._checked
    }

    set checked(value: boolean) {
        this._checked = value
    }

}




// attempted with public instead of private
// export default class ListItem implements Item {
//     constructor(
//         public id: string,
//         public item: string,
//         public checked: boolean
//     ) {}

//     get _id () {
//         return this.id
//     }

//     set _id(value: string) {
//         this.id = value
//     }

//     get _item () {
//         return this.item
//     }

//     set _item(value: string) {
//         this.item = value
//     }

//     get _checked () {
//         return this.checked
//     }

//     set _checked(value: boolean) {
//         this.checked = value
//     }

// }