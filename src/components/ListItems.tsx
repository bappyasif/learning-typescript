import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

export function MyListbox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>{selectedPerson.name}</Listbox.Button>
            <Transition
                enter="transition duration-400 ease-in"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-400 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-100 opacity-0"
            >
                <Listbox.Options>
                    {people.map((person) => (
                        /* Use the `active` state to conditionally style the active option. */
                        /* Use the `selected` state to conditionally style the selected option. */
                        <Listbox.Option key={person.id} value={person} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    // data-headlesui-state={person.id === 2 ? "selected" : ""}
                                    className={`${active && !selected ? 'bg-blue-500 text-white' : selected ? 'bg-red-600 text-white' : 'bg-white text-black'
                                        } flex gap-4 items-center`}
                                >
                                    {selected && <CheckIcon className='w-8 h-4' />}
                                    {person.name}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}

export function MyListboxHorizontal() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson} horizontal>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options className="flex flex-row gap-20">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person} className={""}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  }