// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import Blogs from "./pages/Blogs";
import React from "react";

/// layouts
import Mainlayout from "./Mainlayout.jsx/Mainlayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/works",
          element: <Works />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
