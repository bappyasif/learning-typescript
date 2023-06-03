import FullList from "../model/FullList";

interface DomList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DomList {
    // static instance: ListTemplate = new ListTemplate(document.querySelector("#listItems") as HTMLUListElement)

    // constructor(public ul: HTMLUListElement) {
    //     this.ul = ul
    // }

    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.querySelector("#listItems") as HTMLUListElement
    }

    render(fullList: FullList): void {
        // clearing already existing list
        this.clear()

        const ul = document.querySelector("#listItems")

        if (Array.isArray(fullList.list)) {
            fullList.list.forEach(item => {
                // const li = document.createElement("li");
                const li = document.createElement("li") as HTMLLIElement;
                li.className = "item";

                // const input = document.createElement("input");
                const checked = document.createElement("input") as HTMLInputElement;
                // input.setAttribute("id", item.id)
                checked.id = item.id  // using getter tahts why we're using .id and not ._id
                checked.type = "checkbox"
                checked.tabIndex = 0; // not needed, but its used in tutorial code
                checked.checked = item.checked; // using getter thats why we're using .checked and not ._checked

                li.append(checked);

                // let add that eventlistener so that toggles "checked" value in list

                li.addEventListener("change", () => {
                    item.checked = !item.checked
                    // after toggling chcked value we also need to update our stored list so that it reflects this change
                    // FullList.instance.save()
                    fullList.save()
                })

                // const label = document.createElement("label");
                const label = document.createElement("label") as HTMLLabelElement;
                label.textContent = item.item
                // label.setAttribute("for", item.id)
                label.htmlFor = item.id;

                li.append(label)

                const delBtn = document.createElement("button") as HTMLButtonElement
                delBtn.textContent = "X";
                delBtn.className = "button";
                li.append(delBtn);

                delBtn.addEventListener("click", () => {
                    fullList.removeItem(item.id)
                    // fullList.save() // its already doing this from removeItem method

                    // now we need to re-render our data without this deleted item
                    this.render(fullList)
                })


                ul?.append(li)
            })
        }
    }

    clear(): void {
        this.ul.innerHTML = '';
        // FullList.instance.clearList(); // doing this app wont work correctly as FullList.instance should only be once which it does from "main.ts"
    }
}