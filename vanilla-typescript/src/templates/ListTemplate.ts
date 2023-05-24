import FullList from "../model/FullList";

interface DomList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DomList {
    ul: HTMLUListElement

    // another singleton, responsible for creating our ListTemplate
    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ""
        // we dont have to worry about updating our list in localStorage as it will be taken care of from our FullList model, this template is for data view and rendering only
    }

    render(fullList: FullList): void {
        this.clear()
        
        fullList.list.forEach(item => {
            const li = document.createElement("li");
            li.className = "item"

            const check = document.createElement("input");
            check.type = "checkbox";
            check.id = item.id;
            // check.tabIndex = 0 // by default pagination is going to be same page
            check.checked = item.checked
            li.append(check)

            // adding an event listener which will listen to a change event on checked attribute
            check.addEventListener("change", () => {
                item.checked = !item.checked;
                // after each change event we are updating our list with latest list items
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = "button";
            button.textContent = "X";
            li.append(button)

            button.addEventListener("click", () => {
                fullList.removeItem(item.id);
                // re- rendering data without this deleted item
                console.log()
                this.render(fullList)
            })

            // adding to our singleton ul elemnts withour ready li item
            this.ul.append(li)
        })
    }
}