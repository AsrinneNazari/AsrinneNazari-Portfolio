import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
