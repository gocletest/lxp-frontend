import { Card, Row, Col } from "antd";
import {
  UserOutlined,
  BookOutlined,
  BarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const DashboardCards = () => {
  const cards = [
    {
      title: "총 사용자 수",
      value: "12,540",
      icon: <UserOutlined />,
      color: "#4a90e2",
    },
    {
      title: "총 과정 수",
      value: "1,284",
      icon: <BookOutlined />,
      color: "#50c878",
    },
    {
      title: "오늘 접속자",
      value: "842",
      icon: <LineChartOutlined />,
      color: "#ff8c42",
    },
    {
      title: "진행 중 학습",
      value: "329",
      icon: <BarChartOutlined />,
      color: "#b65cff",
    },
  ];

  return (
    <Row gutter={16}>
      {cards.map((item, idx) => (
        <Col span={6} key={idx}>
          <Card style={{ borderRadius: 12 }}>
            <div style={{ fontSize: 32, color: item.color }}>{item.icon}</div>
            <div style={{ fontSize: 18, marginTop: 10 }}>{item.title}</div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>{item.value}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
