import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import './styles.css'

const ContactUs = () => {

    return (
        <div className="">
            <div className='bgcontactbanner'>
                <div className='bg-[#002147]/80 h-full w-full backdrop-blur-sm md:flex md:justify-center md:items-center  '>
                    <div className="w-[60%]">
                        <ul className="list-none text-white font-bold">
                            <li className="underline uppercase"><Link to={'/'}>Home</Link></li>
                        </ul>
                        <h1 className='w-[60%] font-bold text-5xl text-white '>Contact us </h1>
                    </div>

                </div>

            </div>
            <div className="bg-[#ffffff] h-[600px] flex justify-center items-center ">
                <div className="flex justify-center space-x-14 ">
                    <div className="border-2 w-72 h-[447px]">
                        <div className="flex justify-between items-center border-b-2 py-8 px-8 gap-6">
                            <div>
                                <h1 className="text-xl font-semibold">Address</h1>
                                <p className="text-sm">Birulia, Ashulia, Savar</p>
                            </div>
                            <div>
                                <IoLocationOutline size={25} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 py-8 px-8 gap-6">
                            <div>
                                <h1 className="text-xl font-semibold">Email</h1>
                                <p className="text-sm">helpline@diu.edu.bd</p>
                            </div>
                            <div>
                                <MdOutlineEmail size={25} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 py-8 px-8 gap-6">
                            <div>
                                <h1 className="text-xl font-semibold">Phone</h1>
                                <p className="text-sm">+8801454698856</p>
                            </div>
                            <div>
                                <FiPhone size={25} />
                            </div>
                        </div>
                        <div className="flex justify-between border-b-2 items-center py-6 px-8 sapce-x-6">
                            <div>
                                <h1 className="text-xl font-semibold">Find us</h1>

                            </div>
                            <div className="flex space-x-2">
                                <a href=""><FaFacebook size={25} /></a>
                                <a href=""><FaXTwitter size={25} /></a>
                                <a href=""><FaLinkedin size={25} /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500"> Contact</p>
                        <h1 className="text-2xl font-semibold underline mb-5">Connect with us</h1>

                        <div>
                            <form action="" className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label>Name</label>
                                    <div>
                                        <input type="text" name="name" placeholder="type name" className="w-full border-2 border-gray-300"></input>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label>Email</label>
                                    <div>
                                        <input type="email" name="email" placeholder="type email" className="w-full border-2 border-gray-300"></input>
                                    </div>
                                </div>
                                <div className="space-y-3 col-span-full">
                                    <label>Message</label>
                                    <div>
                                        <textarea type="text" name="message" placeholder="type message" className="h-40 w-full border-2 border-gray-300 rounded-md px-4 pt-4"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className="px-6 py-3 text-white bg-[#002147]  rounded-md font-medium  hover:-translate-y-1 " data-aos="fade-down">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;