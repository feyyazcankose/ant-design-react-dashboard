import { RouteObject, Navigate } from "react-router-dom";

import Site from "../pages/Site";
import Deployments from "../pages/Deployments";
import Commands from "../pages/Commands";
import Environment from "../pages/Environment";
import Queue from "../pages/Queue";
import Ssl from "../pages/Ssl";
import Settings from "../pages/Settings";
import SecurityRules from "../pages/SecurityRules";
import Logs from "../pages/Logs";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/site" replace />,
  },
  {
    path: "/site",
    element: <Site />,
  },
  {
    path: "/deployments",
    element: <Deployments />,
  },
  {
    path: "/commands",
    element: <Commands />,
  },
  {
    path: "/environment",
    element: <Environment />,
  },
  {
    path: "/queue",
    element: <Queue />,
  },
  {
    path: "/ssl",
    element: <Ssl />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/security",
    element: <SecurityRules />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
];
