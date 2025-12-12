import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import api from "@api/api";

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await api.post("/api/auth/login", values);

      if (res.data.code === 200) {
        message.success(res.data.message);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        window.location.href = "/dashboard";
      } else {
        message.error(res.data.message);
      }
    } catch (err) {
      message.error("서버 오류 발생");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <Card bordered={false} style={styles.card}>
        <Title level={2} style={styles.title}>
          고클 LXP 로그인
        </Title>

        <Form
          name="loginForm"
          layout="vertical"
          onFinish={onFinish}
          style={{ width: "100%" }}
        >
          <Form.Item
            label="아이디"
            name="userId"
            rules={[{ required: true, message: "아이디를 입력하세요." }]}
          >
            <Input
              size="large"
              placeholder="아이디"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력하세요." }]}
          >
            <Input.Password
              size="large"
              placeholder="비밀번호"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            block
            style={{ marginTop: 10 }}
          >
            로그인
          </Button>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f6fa",
  },
  card: {
    width: 420,
    padding: "40px 35px",
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 600,
  },
};

export default LoginPage;
