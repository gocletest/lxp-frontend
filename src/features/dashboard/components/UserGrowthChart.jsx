import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const userData = [
  { month: "1월", users: 320 },
  { month: "2월", users: 480 },
  { month: "3월", users: 510 },
  { month: "4월", users: 620 },
];

const UserGrowthChart = () => (
  <div style={{ marginTop: 30, background: "#fff", padding: 20, borderRadius: 10 }}>
    <h3>월별 신규 사용자 증가</h3>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
export default UserGrowthChart;
