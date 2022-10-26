import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import ListPage from "../pages/List/ListPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/list",
      element:<ListPage/>,
    }
  ]);

  export default router;