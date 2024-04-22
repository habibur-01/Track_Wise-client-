import { FaAngleDown, FaCheck } from "react-icons/fa";
import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const people = [
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Others' },
]

const UpdateProfile = () => {
    const [selected, setSelected] = useState(people[0])
    return (
        <div>
            <DashboardTitle title={'Update Your Profile'}></DashboardTitle>
            <div className="m-10 bg-base-200">
                <h1 className="text-black text-center text-xl border-b-2 py-2 mx-10">Personal Information</h1>
                <div>
                    <form className="text-black px-10 py-4 grid grid-cols-2 gap-x-10 gap-y-4">
                        <div className="space-y-3">
                            <label>Name</label>
                            <div>
                                <input type="text" name="name" placeholder="type name"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Email</label>
                            <div>
                                <input type="email" name="email" placeholder="type email"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Student ID</label>
                            <div>
                                <input type="text" name="sid" placeholder="type passwordstudent id"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Date of Birth</label>
                            <div>
                                <input type="date" name="dob" ></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Place of Birth</label>
                            <div>
                                <input type="text" name="pof" placeholder="type place of birth"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Gender</label>
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
                            <label>Maritual Status</label>
                            <div>
                                <input type="text" name="maritual" placeholder="type maritual status"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Religion</label>
                            <div>
                                <input type="text" name="religion" placeholder="type religion"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Nationality</label>
                            <div>
                                <input type="text" name="nationality" placeholder="type nationality"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>National ID</label>
                            <div>
                                <input type="text" name="nid" placeholder="type national id"></input>
                            </div>
                        </div>
                        <div className="">
                            <button className="uppercase btn w-[30%] bg-[#284958] text-white rounded-lg mt-4">Update Personal Data</button>

                        </div>

                    </form>
                </div>


            </div>
            <div className="bg-base-200 m-10 ">
                <h1 className="text-black text-center text-xl border-b-2 py-2 mt-4 mx-10">Present Address</h1>
                <div>
                    <form className="text-black px-10 py-4">
                        <div className=" grid grid-cols-2 gap-x-10 gap-y-4">
                            <div className="space-y-3">
                                <label>Address</label>
                                <div>
                                    <input type="text" name="address" placeholder="type address"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>Post Office</label>
                                <div>
                                    <input type="text" name="PostOffice" placeholder="type post office"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>Police Station</label>
                                <div>
                                    <input type="text" name="police" placeholder="type ploice station"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>District/City</label>
                                <div>
                                    <input type="text" name="district" placeholder="type district"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>Division/State</label>
                                <div>
                                    <input type="text" name="division" placeholder="type division"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>Zip Code</label>
                                <div>
                                    <input type="text" name="zipcode" placeholder="type zip code"></input>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label>Country</label>
                                <div>
                                    <input type="text" name="country" placeholder="type country"></input>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] mt-7 mb-1">
                            <button className="uppercase btn w-[30%] text-white bg-[#284958] rounded-lg">Update Address</button>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;