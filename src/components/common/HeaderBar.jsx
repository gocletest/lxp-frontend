import { Avatar, Input, Dropdown } from "antd";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

const HeaderBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    {
      key: "logout",
      label: "Logout",
      onClick: () => {
        localStorage.clear();
        window.location.href = "/login";
      },
    },
  ];

  return (
    <div
      style={{
        height: 64,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined />}
        style={{ width: 300 }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <BellOutlined style={{ fontSize: 20 }} />

        <Dropdown menu={{ items: menuItems }}>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <Avatar icon={<UserOutlined />} />
            <span style={{ marginLeft: 10 }}>{user?.name || user?.userId}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderBar;
