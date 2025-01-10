import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const routers = createBrowserRouter(
    [
        {
            path: "/", element: <MainLayout/>,
            children: [
                {
                    path: "users", element: <UserPage/>,
                    children: [
                        {path: ":id/carts", element: <CartsPage/>}
                    ]
                }
            ]
        }
    ]
)