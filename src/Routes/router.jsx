import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserDashboard from "../Pages/Dashboard/UserDashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";
import TransportClearance from "../Pages/Dashboard/TransportClearance/TransportClearance";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PaymentSuccess from "../Pages/PaymentMessage/PaymentSuccess";
import PaymentFail from "../Pages/PaymentMessage/PaymentFail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
    ]
  },
  {
    path: "/payment/success/:transId",
    element: <PaymentSuccess></PaymentSuccess>
  },
  {
    path: "/payment/fail/:transId",
    element: <PaymentFail></PaymentFail>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "transportClearance",
        element: <TransportClearance></TransportClearance>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
    ]
  }
]);
export default router;