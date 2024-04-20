import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logos/Logo.png"

const Dashboard = () => {
    const navLinks = <>
        <li><NavLink to={"/"}>Dashboard</NavLink></li>
        <li><NavLink to={"profile"}>Profile</NavLink></li>
        <li><NavLink to={"updateProfile"}>Profile Update</NavLink></li>
        <li><NavLink to={"paymentHistory"}>Payment History</NavLink></li>
        <li><NavLink to={"transportClearance"}>Transport Clearance</NavLink></li>
    </>
    const navbar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to={"/track"}>Track</NavLink></li>
        <li><NavLink to={"/register"}>Registration</NavLink></li>
        <li><NavLink to={"/schedule"}>Schedule</NavLink></li>
        <li><NavLink to={"contact"}>Contact us</NavLink></li>
    </>
    return (

        <div>
            <div className='flex items-center h-16 bg-[#304f5e]'>
                <div>
                    <img src={logo} className='w-16 h-16' alt="" />
                </div>
                <div>
                    <a className=" text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">TrackWise</a>
                </div>
            </div>
            <div className="flex text-[#e4eeee] text-base">
                <div className="w-64 bg-[#304f5e] min-h-screen">

                    <div className="flex flex-col items-center space-y-3 text-[#e4eeee] pt-10 pb-5 border-y-2">
                        <img src="" className="h-16 border rounded-full w-16" alt="" />
                        <h2 className="text-lg">example12@gmail.com</h2>

                    </div>
                    <div className="py-8 border-b-2  px-10">
                        <ul className="list-none space-y-4">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none space-y-4  px-10 py-8">
                            {navbar}
                        </ul>
                    </div>

                </div>
                <div className="flex-1">
                    <div>

                        Hello
                    </div>


                    <div className="px-10">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div >
        </div>
    );
};

export default Dashboard;