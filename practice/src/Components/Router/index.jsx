import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from '../mui/Login';
import Dashboard from '../containers/Dashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default function Routes(props) {

    return (
        <RouterProvider router={router} />
    )
}