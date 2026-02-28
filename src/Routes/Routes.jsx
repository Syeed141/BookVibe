import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import MarkAsRead from "../Pages/MarkAsRead/MarkAsRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/Home", Component: Home },
      { path: "/About", Component: About },
      { path: "/BookDetails/:id", Component: BookDetails },
      {
        path: "/ReadList",

        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },

        Component: MarkAsRead,
      },
    ],
  },
]);
