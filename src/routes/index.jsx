import { createBrowserRouter } from "react-router-dom";
import UserDetails from "../pages/details/UserDetails";
import UserTodos from "../pages/todos/UserTodos";
import Home from "../pages/home/Home";
import UserPosts from "../pages/posts/UserPosts";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/details/:id",
        element: <UserDetails />
    },
    {
        path: "/todo/:id",
        element: <UserTodos />
    },
    {
        path: "/post/:id",
        element: <UserPosts />
    }
])