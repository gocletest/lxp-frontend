import { Card } from "antd";

const DashboardCards = () => {
  const stats = [
    { title: "전체 사용자", value: "12,320명" },
    { title: "총 강의 수", value: "184개" },
    { title: "이번달 신규가입", value: "351명" },
    { title: "이번달 수강신청", value: "1,248건" },
  ];

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {stats.map((s, i) => (
        <Card
          key={i}
          style={{
            flex: 1,
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ color: "#6b7280" }}>{s.title}</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{s.value}</div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;
