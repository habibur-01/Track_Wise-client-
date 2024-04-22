import { Fragment, useState } from "react";
import signuppic from "../../assets/6368592.jpg"
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaArrowLeft, FaCheck } from "react-icons/fa";
import "./style.css"
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { updateProfile } from "firebase/auth";
const people = [
    { name: 'Student' },
    { name: 'Staff' },
]
const Registration = () => {
    const [selected, setSelected] = useState(people[0])
    const { createUser } = useAuth()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const gender = selected
        const password = form.password.value
        const userInfo = { name, email, gender, password }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    // photoURL: data?.data?.display_url
                })
            }).catch(error => {
                console.log(error)
            })

            axios.post('http://localhost:3000/user', userInfo)
            .then(response=>{
                console.log(response)
            }).catch(err=>{
                console.log(err)
            })


    }
    return (
        <div className="flex justify-center relative w-full h-[800px] items-center">
            <div className="w-[50%]">
                <img src={signuppic} className="w-[80%] h-[80%]" alt="" />
            </div>
            <div className="w-[50%] p-8">
                <div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold uppercase">Sign Up</h1>
                        <p>Please create your account to explore us.</p>
                    </div>
                    <form className="space-y-4 my-8" onSubmit={handleSignUp}>
                        <div className="space-y-3">
                            <label>Name</label>
                            <div>
                                <input type="text" name="name" placeholder="type email"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Email</label>
                            <div>
                                <input type="email" name="email" placeholder="type email"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Role</label>
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
                        <div className="space-y-3">
                            <label>Password</label>
                            <div>
                                <input type="password" name="password" placeholder="type password"></input>
                            </div>
                        </div>
                        <div>
                            <button className="uppercase btn w-[70%] rounded-lg">Continue</button>
                            <p className="text-sm mt-2">Already have an account? Please <a href="/login" className="text-blue-500">Login</a></p>
                        </div>

                    </form>
                </div>
            </div>
            <div className="lg:hidden block absolute top-12 left-10">
                <FaArrowLeft size={15} />
            </div>

        </div>
    );
};

export default Registration;