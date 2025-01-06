import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {MainLayout} from "../layouts/MainLayouts.tsx";

export const router = createBrowserRouter(
    [
        {
            path: "/", element: <MainLayout/>,
            children: [
                {path: "users", element: <UsersPage/>},
                {path: "posts", element: <PostsPage/>}
            ]
        }
    ]
)