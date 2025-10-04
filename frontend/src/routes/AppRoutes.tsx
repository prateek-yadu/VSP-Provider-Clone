import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../pages/Home'
import Layout from "../pages/Layout";


export default function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: Layout,
            children: [
                 { index: true, Component: App },
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}
