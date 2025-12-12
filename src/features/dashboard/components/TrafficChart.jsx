import { Card } from "antd";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "월", users: 320 },
  { day: "화", users: 410 },
  { day: "수", users: 390 },
  { day: "목", users: 520 },
  { day: "금", users: 610 },
];

const TrafficChart = () => {
  return (
    <Card title="주간 접속자 수" style={{ borderRadius: 12 }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#4a90e2" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TrafficChart;
