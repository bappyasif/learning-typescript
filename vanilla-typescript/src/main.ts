import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = ():void => {
    const fullList = FullList.instance;
    const listTemplate = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        const inputItem = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = inputItem.value.trim()
        if(!newEntryText.length) return

        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length -1].id) + 1 : 1

        const newItem = new ListItem(itemId.toString(), newEntryText);

        // adding item to list
        fullList.addItem(newItem);

        // rendering list with updated list items
        listTemplate.render(fullList);
    })

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
    clearItems.addEventListener("click", ():void => {
        fullList.clearList();
        listTemplate.clear();
    })

    // loading fulllist and rendering it on screen
    fullList.load();
    listTemplate.render(fullList)
}

// making sure dom content is loaded first before we are interacting with it using this script
document.addEventListener("DOMContentLoaded", initApp)