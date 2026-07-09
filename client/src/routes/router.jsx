import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AeoGeo from "../pages/AEOGeo";
import AIRanking from "../pages/AIRanking";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "services/aeo-&-geo",
        element: <AeoGeo />,
      },
      {
        path: "services/ai-ranking",
        element: <AIRanking />,
      },
    ],
  },
]);

export default router;