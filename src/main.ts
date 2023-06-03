import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  // creating our singletons for this app
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
  itemEntryForm.addEventListener("submit", e => {
    e.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText) return

    // giving a new unique number, so that we can use later on to delete item when required
    // when nout founf we will simply add 1 as number
    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1

    const newItem = new ListItem(itemId.toString(), newEntryText)
    
    // now adding iktem to list and re-rendering list
    fullList.addItem(newItem);

    template.render(fullList);
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener("click", (): void => {
    fullList.clearList(); // clearing list fropm local storage
    template.clear(); // clearing from DOM view
  })


  // loading list
  fullList.load();
  // once done loading list we need to render this on DOM
  template.render(fullList)
}

// meaning run this app code only when our DOM is loadded with initial content needed for this to be able to interact with user, similar to "defer" in html "script" attribute
document.addEventListener("DOMContentLoaded", initApp)