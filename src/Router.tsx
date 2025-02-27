import { createBrowserRouter
 } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/about";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  export default router;
