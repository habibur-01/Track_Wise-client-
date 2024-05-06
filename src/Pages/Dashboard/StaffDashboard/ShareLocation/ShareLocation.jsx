import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const destination = [
    { name: 'Dhanmondi' },
    { name: 'Savar' },
    { name: 'Uttara' },
    { name: 'Tongi' },
]
const ShareLocation = () => {
    const [selected, setSelected] = useState(destination[0])
    const handleShareLocation = (e) => {
        e.preventDefault()
        const form =  e.target
        const destination = selected.name
        const name = form.name.value
        console.log(name, destination)
    }
    return (
        <div>
            <form onSubmit={handleShareLocation}>
                <div className="space-y-3">
                    <label>Name</label>
                    <div>
                        <input type="text" name="name" placeholder="type name"></input>
                    </div>
                </div>
                <div className="space-y-3">
                    <label>Bus Name</label>
                    <div>
                        <input type="text" name="bus" placeholder="type email"></input>
                    </div>
                </div>
                <div className="space-y-3">
                    <label>Bus Number</label>
                    <div>
                        <input type="text" name="busnumber" placeholder="type email"></input>
                    </div>
                </div>
                <div className="space-y-3">
                    <label>Destination</label>
                    <div>
                        <div className="">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="headlessInputfield relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <FaAngleDown
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60  w-[70%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {destination.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                </div>
                <div className={`space-y-3 ${selected.name === 'Student' ? 'block' : 'hidden'}`}>
                    <label>Student Id</label>
                    <div>
                        <input type="text" name="sid" placeholder="type password"></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ShareLocation;