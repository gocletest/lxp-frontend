import DashboardCards from "@features/dashboard/components/DashboardCards";
import TrafficChart from "@features/dashboard/components/TrafficChart";
import UserGrowthChart from "@features/dashboard/components/UserGrowthChart";
import RecentActivity from "@features/dashboard/components/RecentActivity";

import "./Dashboard.css";

const DashboardHome = () => {
  return (
    <>
      <h2 className="page-title">📊 LXP 관리자 대시보드</h2>

      {/* KPI 카드 */}
      <DashboardCards />

      {/* 차트 두 개를 좌/우 배치 */}
      <div className="charts-row">
        <TrafficChart />
        <UserGrowthChart />
      </div>

      {/* 최근 활동 로그 */}
      <RecentActivity />
    </>
  );
};

export default DashboardHome;
