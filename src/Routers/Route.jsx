import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Skills from "../Components/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/skill",
        element:<Skills></Skills>
      },
    ]
  }
]);

export default router;
