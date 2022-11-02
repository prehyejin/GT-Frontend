import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import ListPage from "../pages/List/ListPage";
import CctvPage from "../pages/CCTV/CctvPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/list",
      element:<ListPage/>,
    },
    {
      path: "/cctv",
      element:<CctvPage/>,
    },
  ]);

  export default router;