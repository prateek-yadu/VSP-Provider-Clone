import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../pages/Home'
import Layout from "../pages/Layout";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard";
import VPS from "../pages/dashboard/VPS/VPS";


export default function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: Layout,
            children: [
                 { index: true, Component: App },
                 { path: "dashboard", Component: DashboardLayout, children: [
                    {index: true, Component: Dashboard},
                    {path: "vps", Component: VPS}
                 ] }
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}
