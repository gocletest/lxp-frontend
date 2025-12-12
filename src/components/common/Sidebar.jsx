import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  BookOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const items = [
    { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/users", icon: <UserOutlined />, label: "Users" },
    { key: "/courses", icon: <BookOutlined />, label: "Courses" },
    { key: "/reports", icon: <BarChartOutlined />, label: "Analytics" },
    { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
  ];

  return (
    <div style={{ height: "100%", backgroundColor: "#1f2937" }}>
      <div
        style={{
          height: 60,
          color: "#fff",
          fontSize: 20,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
          borderBottom: "1px solid #374151",
        }}
      >
        LXP Admin
      </div>

      <Menu
        theme="dark"
        mode="inline"
        items={items}
        style={{
          backgroundColor: "#1f2937",
        }}
        onClick={(item) => navigate(item.key)}
      />
    </div>
  );
};

export default Sidebar;
