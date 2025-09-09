import Layout from "@/components/layout/layout";
import About from "@/pages/about/about";
import Corporate from "@/pages/corporate/corporate";
import Home from "@/pages/home/home";
import Weddings from "@/pages/weddings/weddings";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/weddings",
        element: <Weddings />,
      },
      {
        path: "/corporate",
        element: <Corporate />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
