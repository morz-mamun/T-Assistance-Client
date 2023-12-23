import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoard from "../Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Tasks from "../Pages/Dashboard/DNavbar/Tasks/Tasks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'task',
          element: <PrivateRoute><Tasks></Tasks></PrivateRoute>
        }
      ]
    }
  ]);
export default router;