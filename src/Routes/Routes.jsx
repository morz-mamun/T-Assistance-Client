import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoard from "../Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Tasks from "../Pages/Dashboard/DNavbar/Tasks/Tasks";
import EditTask from "../Pages/Dashboard/DNavbar/Tasks/EditTask/EditTask";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import TodoBoard from "../Pages/Dashboard/TodoBoard/Components/TodoBoard";


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
          path: '/about',
          element: <About></About>
        },
        {

        },
        {
          path: '/contact',
          element: <Contact></Contact>
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
          path: "/dashboard",
          element: <AllTask></AllTask>
        },
        {
          path: 'task',
          element: <PrivateRoute><TodoBoard/></PrivateRoute>
        },
        {
          path: 'edit/:id',
          element: <EditTask></EditTask>,
          loader: ({params}) => fetch(`/localhost:5000/allTask/${params.id}`)
        }
      ]
    }
  ]);
export default router;