import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Logo.png";
import {
  MdFactCheck,
  MdOutlineDashboard,
  MdOutlineLogout,
} from "react-icons/md";
import { FaCreditCard, FaHome, FaUser, FaUserEdit } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import "./style.css";
const Dashboard = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    userLogOut();
    console.log("user");
    navigate("/");
  };
  const navLinks = (
    <>
      <li className="sidebar">
        <NavLink to={"/dashboard"}>
          <span className="flex items-center gap-2">
            <MdOutlineDashboard size={20} />
            Dashboard
          </span>
        </NavLink>
      </li>
      <li className="sidebar">
        <NavLink to={"/dashboard/profile"}>
          <span className="flex items-center gap-2">
            <FaUser size={17} />
            Profile
          </span>
        </NavLink>
      </li>
      <li className="sidebar">
        <NavLink to={"updateProfile"}>
          <span className="flex items-center gap-2">
            <FaUserEdit size={21} />
            Profile Update
          </span>
        </NavLink>
      </li>
      <li className="sidebar">
        <NavLink to={"paymentHistory"}>
          <span className="flex items-center gap-2">
            <FaCreditCard size={18} />
            Payment History
          </span>
        </NavLink>
      </li>
      <li className="sidebar">
        <NavLink to={"transportClearance"}>
          <span className="flex items-center gap-2">
            <MdFactCheck size={20} />
            Transport Clearance
          </span>
        </NavLink>
      </li>
    </>
  );
  const navbar = (
    <>
      <li className="sidebar">
        <NavLink to="/">
          <span className="flex items-center gap-2">
            <FaHome size={20} />
            Home
          </span>
        </NavLink>
      </li>
      {/* <li>
        <NavLink to={"/track"}>Track</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={"/schedule"}>Schedule</NavLink>
      </li> */}
      <li>
        <span
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={handleLogout}
        >
          <MdOutlineLogout size={20} />
          Logout
        </span>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex items-center h-16 bg-[#304f5e]">
        <div>
          <img src={logo} className="w-16 h-16" alt="" />
        </div>
        <div>
          <a className=" text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            TrackWise
          </a>
        </div>
      </div>
      <div className="flex text-[#e4eeee] text-base">
        <div className="w-64 bg-[#304f5e] min-h-screen">
          <div className="flex flex-col items-center space-y-3 text-[#e4eeee] pt-10 pb-5 border-y-2">
            <img src="" className="h-16 border rounded-full w-16" alt="" />
            <h2 className="text-lg">example12@gmail.com</h2>
          </div>
          <div className="py-8 border-b-2  px-10">
            <ul className="list-none space-y-4">{navLinks}</ul>
          </div>
          <div>
            <ul className="list-none space-y-4  px-10 py-8">{navbar}</ul>
          </div>
        </div>
        <div className="flex-1">

          <Outlet></Outlet>

        </div>
      </div >
    </div >
  );
};

export default Dashboard;
