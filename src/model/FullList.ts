import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void
    removeItem(itemId: string): void
}

type ParsedList = {
    _id: string,
    _item: string,
    _checked: boolean
}

export default class FullList implements List {
    // by using static instance we are ensuring thhat we will only create once list of this Class, just an improvement to show thar its also possible to do so
    // now we can always point to this "instance" varriable, aka Singleton
    static instance: FullList = new FullList()

    constructor(
        private _list: ListItem[] = []
    ) { }

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("mijnList")

        if (typeof storedList !== "string") return

        // this parsedList also needs to be type assigned for better Type assertions

        const parsedList: ParsedList[] = JSON.parse(storedList)

        // loading list onto dom by using static instance and calling addItem with each iterated list items
        parsedList.forEach(item => {
            const newListItem = new ListItem(item._id, item._item, item._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("mijnList", JSON.stringify(this._list))
    }

    clearList(): void {
        // emptying list and then updating it in localstorage as well to overwrite any laready existing list
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(itemId: string): void {
        const filteredList = this._list.filter(item => item.id !== itemId)
        this._list = filteredList;

        this.save()
    }
}