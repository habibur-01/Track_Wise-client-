import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Registration></Registration>
        },
      ]
    },
  ]);
  export default router;