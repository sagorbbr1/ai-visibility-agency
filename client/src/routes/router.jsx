import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AeoGeo from "../pages/AEOGeo";
import AIRanking from "../pages/AIRanking";
import NotFound from "../pages/NotFound";
import LLMVisibility from "../pages/LLMVisibility";
import BrandMentions from "../pages/BrandMentions";
import LinkedInListicles from "../pages/Listicles";
import FanOutQueries from "../pages/FanOutQueries";
import BrandPromptResearch from "../pages/BrandPromptResearch";

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
      {
        path: "services/llm-visibility",
        element: <LLMVisibility />,
      },
      {
        path: "services/brand-mentions",
        element: <BrandMentions />,
      },
      {
        path: "services/ai-listicles",
        element: <LinkedInListicles />,
      },
      {
        path: "services/fan-out-queries",
        element: <FanOutQueries />,
      },
      {
        path: "services/brand-prompt-research",
        element: <BrandPromptResearch />,
      }
    ],
  },
]);

export default router;