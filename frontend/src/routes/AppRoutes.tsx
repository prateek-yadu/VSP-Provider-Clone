import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../App'


export default function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}
