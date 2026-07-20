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
import AiLinkBuilding from "../pages/AiLinkBuilding";
import LocalGBPRanking from "../pages/LocalGBPRanking";
import GeoAudit from "../pages/GeoAudit";
import Order from "../pages/Order";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Framework from "../pages/Framework";
import Blogs from "../pages/Blogs";
import AdminLogin from "../pages/AdminLogin";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import CreateBlog from "../pages/admin/CreateBlog";
import EditBlog from "../pages/admin/EditBlog";
import AdminBlogs from "../pages/admin/Blogs";
import SingleBlog from "../pages/SingleBlog";


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
      },
      {
        path: "services/ai-link-building",
        element: <AiLinkBuilding />,
      },
      {
        path: "services/local-gbp-ranking",
        element: <LocalGBPRanking />,
      },
      {
        path: "services/geo-audit",
        element: <GeoAudit />,
      },
      {
    path: "/order",
    element: <Order />,
},
{
  path: "/pricing",
  element: <Pricing />,
},
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/framework",
    element: <Framework />,
  },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    {
        path: "/blogs/:slug",
        element: <SingleBlog />,
      },
    {
  path: "/admin/login",
  element: <AdminLogin />,
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute> )
    },
    {
  path: "/admin/blogs",
  element: (
    <ProtectedRoute>
      <AdminBlogs />
    </ProtectedRoute>
  ),
},
{
  path: "/admin/create-blog",
  element: (
    <ProtectedRoute>
      <CreateBlog />
    </ProtectedRoute>
  ),
},
{
  path: "/admin/edit-blog/:id",
  element: (
    <ProtectedRoute>
      <EditBlog />
    </ProtectedRoute>
  ),
},

    ],
  },
]);

export default router;