import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import MainLayout from "./layout/MainLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* 로그인 후 메인 레이아웃 */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardHome />} />
      </Route>
    </Routes>
  );
}

export default App;
