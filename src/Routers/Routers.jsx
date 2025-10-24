import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Components/Home/Home";
import Apps from "../Components/AllApps/Apps";
import Installation from "../Components/Installation/Installation";
import SingleApp from "../Components/SingleApp/SingleApp";

export const router = createBrowserRouter([
  { 
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        { index: true, 
            loader: () => fetch("/HomeData.json"),
            path: "/",
          Component: Home,  
        },
        {
            path: '/Apps',
            loader: () => fetch("/AllAppData.json"),  
            Component: Apps
        },

        {
            path: '/Installation',
            Component: Installation
        },
        {
            path: "/SingleApp/:id",
            loader: () => fetch("/AllAppData.json"),  
            Component: SingleApp
        }
    ]
  }
]);