import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  export default router;