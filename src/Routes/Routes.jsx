import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children : [

      { index: true, Component: Home },
      { path: "/Home", Component: Home },
      { path : "/About", Component: About  },
      { path : "/BookDetails/:id", Component: BookDetails  },


    ]
  },
]);