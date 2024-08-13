import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                // element: <Dashboard/>
                element: <h1>Dashboard</h1>
            },
            {
                path: 'clientes/',
                element: <h1>Clientes</h1>
            }
        ]
    }
]);

export default router;