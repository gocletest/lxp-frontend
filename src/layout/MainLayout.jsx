import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "@components/common/Sidebar";
import HeaderBar from "@components/common/HeaderBar";
import LoadingSpinner from "@components/common/LoadingSpinner";
import api from "@api/api";
import { Outlet } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Auth 체크 로딩 상태

  // 로그인 상태 자동 체크
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await api.get("/api/auth/me");

      if (res.data.code === 200) {
        // 유저 정보 갱신
        localStorage.setItem("user", JSON.stringify(res.data.data));
      } else {
        // 잘못된 토큰
        handleLogout();
      }
    } catch (err) {
      // 401 또는 API 오류 → 로그아웃 처리
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃 처리 공통 함수
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 인증 체크 중 로딩 화면
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 좌측 메뉴 */}
      <Sider width={230}>
        <Sidebar />
      </Sider>

      <Layout>
        {/* 상단바 */}
        <Header style={{ padding: 0, background: "#fff" }}>
          <HeaderBar />
        </Header>

        {/* 콘텐츠 영역 */}
        <Content style={{ padding: 24, background: "#f5f6fa" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
