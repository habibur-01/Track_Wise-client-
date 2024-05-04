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
import TrackTransport from "../Pages/TrackTransport/TrackTransport";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Schedule from "../Pages/Schedule/Schedule";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllStudent from "../Pages/Dashboard/AdminDashboard/AllStudent/AllStudent";
import AllStaffs from "../Pages/Dashboard/AdminDashboard/AllStaffs/AllStaffs";
import PaymentClearance from "../Pages/Dashboard/AdminDashboard/PaymentClearance/PaymentClearance";

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
        element: <PrivateRoute><Registration></Registration></PrivateRoute>
      },
      {
        path: "/track",
        element:<PrivateRoute> <TrackTransport></TrackTransport></PrivateRoute>
      },
      {
        path: "/schedule",
        element: <Schedule></Schedule>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      }
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>
      },
      {
        path: "profile",
        element:<PrivateRoute> <Profile></Profile></PrivateRoute>
      },
      {
        path: "updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "transportClearance",
        element: <TransportClearance></TransportClearance>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "admindashboard",
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: "students",
        element: <AllStudent></AllStudent>
      },
      {
        path: "staffs",
        element: <AllStaffs></AllStaffs>
      },
      {
        path: "payments",
        element: <PaymentClearance></PaymentClearance>
      }
    ]
  }
]);
export default router;