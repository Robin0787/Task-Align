import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import SignUp from "../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/my-tasks',
                element: <MyTasks />
            },
            {
                path: '/add-task',
                element: <AddTask />
            },
            {
                path: '/completed-tasks',
                element: <CompletedTask />
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    }
]);


export default routes;