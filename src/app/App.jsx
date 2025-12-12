import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import DashboardHome from "../features/dashboard/pages/DashboardHome"; 
// 실제 위치에 따라 수정

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardHome />} />
      </Route>
    </Routes>
  );
}

export default App;
