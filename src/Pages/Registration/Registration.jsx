import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaAngleDown, FaCheck } from 'react-icons/fa';
import logo from "../../assets/logos/TrackWise.png"
import "./styles.css"
import axios from 'axios';

const people = [
    { name: 'CSE' },
    { name: 'EEE' },
    { name: 'SWE' },
    { name: 'ESDM' },
    { name: 'MCT' },
    { name: 'Pharmacy' },
    { name: 'LLB' },
    { name: 'BBA' },
]
const people1 = [
    { name: 'Uttara to DSC' },
    { name: 'Savar to DSC' },
    { name: 'Dhanmondi to DSC' },
    { name: 'Mirpur-1 to DSC' },
    { name: 'Tongi to DSC' },
    { name: 'Dhamrai to DSC' },
    // { name: 'LLB' },
    // { name: 'BBA' },
]

const Registration = () => {
    const [selected, setSelected] = useState(people[0])
    const [selectedRoute, setSelectedRoute] = useState(people1[0])
    const handleTransportReg = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const studentId = form.id.value
        const department = selected
        const program = form.program.value
        const phone = form.phone.value
        const route = form.route.value
        const transportFee = form.charge.value
        const userRegInfo = { name, email, studentId, department, program, phone, route, transportFee }
        console.log(userRegInfo)
        axios.post("http://localhost:3000/registerUser", userRegInfo)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <div className='bgbanner'>
                <div className=' bgbanner1 pl-10 flex justify-center items-center h-full bgbanner1'>
                    <h1 className='w-[60%] font-bold text-5xl text-white '>Take Your Transport Card Through The Application </h1>
                </div>

            </div>
            <div className='bgPic mb-10'>
                <h1 className='text-black text-4xl uppercase text-center pt-28 pb-10'>Fill out the form below</h1>
                <div className=' w-full flex justify-center items-center '>

                    <div className='w-1/2 border bg-white/30 backdrop-blur-md relative rounded-tl-3xl mb-28'>
                        <div className='p-10 text-black'>
                            <h1 className='text-3xl font-semibold'>Transport Application Form</h1>
                            <p>Take transport service through the application.</p>
                        </div>
                        <div className='absolute right-0 top-0'>
                            <img src={logo} alt="" className='h-28' />
                        </div>
                        <form className="space-y-4 my-8 px-10 formhandle" onSubmit={handleTransportReg}>
                            <div className='flex gap-6'>
                                <div className="space-y-3 w-[50%]">
                                    <label>Name</label>
                                    <div>
                                        <input type="text" name="name" placeholder="type email"></input>
                                    </div>
                                </div>
                                <div className="space-y-3 w-[50%]">
                                    <label>Email</label>
                                    <div>
                                        <input type="email" name="email" placeholder="type email"></input>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-6'>
                                <div className="space-y-3 w-[50%]">
                                    <label>Student ID</label>
                                    <div className=''>
                                        <input type="text" name="id" placeholder="type email"></input>
                                    </div>
                                </div>
                                <div className="space-y-3 w-[50%]">
                                    <label>Department</label>
                                    <div>
                                        <div className="">
                                            <Listbox value={selected} onChange={setSelected}>
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative headlessInputfield w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                            {people.map((person, personIdx) => (
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
                            </div>


                            <div className="space-y-3">
                                <label>Program</label>
                                <div>
                                    <input type="text" name="program" placeholder="type program"></input>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="space-y-3 w-[50%]">
                                    <label>Phone Number</label>
                                    <div>
                                        <input type="number" name="phone" placeholder="type phone number"></input>
                                    </div>
                                </div>
                                <div className="space-y-3 w-[50%]">
                                    <label>Total Charge</label>
                                    <div>
                                        <input type="number" name="charge" placeholder="type phone number"></input>
                                    </div>
                                </div>

                            </div>

                            <div className="space-y-3 w-[50%]">
                                <label>Route Name</label>
                                <div className="">
                                    <Listbox value={selectedRoute} onChange={setSelectedRoute}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative headlessInputfield w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{selectedRoute.name}</span>
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
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                    {people1.map((person, personIdx) => (
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
                            <div className='flex justify-center'>
                                <button className="uppercase btn w-full mt-5 btn-primary rounded-lg">Continue</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration; 