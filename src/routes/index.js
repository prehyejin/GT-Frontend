import { createBrowserRouter } from "react-router-dom";
import OverviewPage from "../pages/Overview/OverviewPage";
import ListPage from "../pages/List/ListPage";
import CctvPage from "../pages/CCTV/CctvPage";
// import OverviewPage from "../pages/Overview";

const router = createBrowserRouter([
    {
      path: "/",
      element:<ListPage/>,
    },
    {
      path: "/overview",
      element: <OverviewPage />,
      
    },
    {
      path: "/cctv",
      element:<CctvPage/>,
    },
  ]);

  export default router;