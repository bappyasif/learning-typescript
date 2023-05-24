import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {
    // constructor(
    //     private _list: ListItem[] = []
    // ) {}

    // we will also create a singleton, which is a static instance of this class
    // reason for this is that , we will be only using this Once, as in One List for this app
    // and we do this by making constructor private and creating an static instance from it
    static instance: FullList = new FullList()
    private constructor(
        private _list: ListItem[] = []
    ) {}

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if(typeof storedList !== "string") return

        const parsedList : {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save() // overwriting previous stored values with an empty list
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        const filteredList = this._list.filter(item => item.id !== id)
        this._list = filteredList
        this.save()
    }
}