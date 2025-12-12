import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";

import LoginPage from "@features/auth/pages/LoginPage";
import DashboardHome from "@features/dashboard/pages/DashboardHome";

export default createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dashboard", element: <DashboardHome /> },
      // 추가: users, courses, stats 등
    ],
  },
  { path: "*", element: <div>404 Not Found</div> },
]);
