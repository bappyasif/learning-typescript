"use client"

import { SearchManufacturerProps } from '@/types'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from "@headlessui/react"
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchManufacurer = (props: SearchManufacturerProps) => {
    const { manufacturer, setManufacturer } = props
    const [query, setQuery] = useState("")

    const manufacturerOptions =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) => (
                item.toLowerCase().replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className={"absolute top-[14px]"}>
                        <Image
                            width={20}
                            height={20}
                            src={"./car-logo.svg"}
                            alt='car logo'
                            className='ml-4'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className={"search-manufacturer__input"}
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {
                                // manufacturerOptions.length === 0 && query !== ""
                                //     ?
                                //     <Combobox.Option
                                //         value={query}
                                //         className={"search-manufacturer__option"}
                                //     >
                                //         Create  "{query}"
                                //     </Combobox.Option>
                                //     :
                                manufacturerOptions.map(item => {
                                    return (
                                        <Combobox.Option
                                            key={item}
                                            value={item}
                                            className={({ active }) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-slate-200" : "bg-slate-900"}`}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                        {item}
                                                    </span>

                                                    {/* Show an active blue background color if the option is selected */}
                                                    {selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                                        ></span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    )
                                })
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacurer