import DashboardCards from "../components/Dashboard/Cards";
import TrafficChart from "../components/Dashboard/TrafficChart";
import UserGrowthChart from "../components/Dashboard/UserGrowthChart";
import RecentActivity from "../components/Dashboard/RecentActivity";

const DashboardHome = () => {
  return (
    <div>
      <DashboardCards />
      <TrafficChart />
      <UserGrowthChart />
      <RecentActivity />
    </div>
  );
};

export default DashboardHome;
