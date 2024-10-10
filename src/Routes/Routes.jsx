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
import TaskDashboard from "../Pages/Dashboard/TaskDashboard/TaskDashboard";


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
      element: <PrivateRoute><DashBoard /></PrivateRoute>,
      children: [
        {
          path: "taskdashboard",
          element: <PrivateRoute><TaskDashboard /></PrivateRoute>
        },
        {
          path: 'mytask',
          element: <PrivateRoute><TodoBoard/></PrivateRoute>
        },
        {
          path: 'edit/:id',
          element: <PrivateRoute><EditTask/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allTask/${params.id}`)
        }
      ]
    }
  ]);
export default router;