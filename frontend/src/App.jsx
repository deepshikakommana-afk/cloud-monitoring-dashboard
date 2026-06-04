import { useEffect, useState } from "react";
import axios from "axios";
import MonitoringChart from "./components/MonitoringChart";
import DashboardCard from "./components/DashboardCard";
import AlertsTable from "./components/AlertsTable";
import {
  FaCloud,
  FaTachometerAlt,
  FaAws,
  FaBell,
  FaCog,
} from "react-icons/fa";
import "./App.css";
import CloudProviderCard from "./components/CloudProviderCard";

function App() {
  const [stats, setStats] = useState({
    cpuUsage: "",
    memoryUsage: "",
    diskUsage: "",
    networkTraffic: "",
    serverStatus: "",
    activeAlerts: "",
    cloudProvider: "",
  });

  // Fetch backend API data
  useEffect(() => {
  fetchMonitoringData();

  const interval = setInterval(() => {
    fetchMonitoringData();
  }, 5000);

  return () => clearInterval(interval);

}, []);

  const fetchMonitoringData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/monitor/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.log("Error fetching monitoring data:", error);
    }
  };

  return (
   <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2 style={styles.logo}>☁ Cloud Monitor</h2>

        <ul style={styles.menu}>

  <li style={styles.menuItem}>
    <FaTachometerAlt />
    Dashboard
  </li>

  <li style={styles.menuItem}>
    <FaAws />
    AWS
  </li>

  <li style={styles.menuItem}>
    <FaCloud />
    Azure
  </li>

  <li style={styles.menuItem}>
    <FaCloud />
    GCP
  </li>

  <li style={styles.menuItem}>
    <FaBell />
    Alerts
  </li>

  <li style={styles.menuItem}>
    <FaCog />
    Settings
  </li>

</ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        
        <h1 style={styles.heading}>
          Cloud Monitoring Dashboard
        </h1>

        {/* Cards */}
<div className="cards-container">

  <DashboardCard
    title="CPU Usage"
    value={stats.cpuUsage}
  />

  <DashboardCard
    title="Memory Usage"
    value={stats.memoryUsage}
  />

  <DashboardCard
    title="Disk Usage"
    value={stats.diskUsage}
  />

  <DashboardCard
    title="Network Traffic"
    value={stats.networkTraffic}
  />

</div>
        {/* Status Section */}
        <div style={styles.statusBox}>
          <h2>Server Status</h2>

          <p style={{ color: "#22c55e", marginTop: "10px" }}>
            ● {stats.serverStatus}
          </p>

          <p style={{ marginTop: "15px" }}>
            Active Alerts: {stats.activeAlerts}
          </p>

          <p style={{ marginTop: "10px" }}>
            Cloud Provider: {stats.cloudProvider}
          </p>
        </div>
        <MonitoringChart />
        <AlertsTable />
        <CloudProviderCard
  provider="AWS"
  region="us-east-1"
  services="24"
  status="Healthy"
/>

<CloudProviderCard
  provider="Azure"
  region="Central India"
  services="18"
  status="Healthy"
/>

<CloudProviderCard
  provider="GCP"
  region="asia-south1"
  services="12"
  status="Warning"
/>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#0f172a",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#111827",
    padding: "20px",
    borderRight: "1px solid #1e293b",
  },

  logo: {
    marginBottom: "40px",
    color: "#38bdf8",
  },

  menu: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontSize: "18px",
    cursor: "pointer",
  },
  menuItem: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px",
  borderRadius: "8px",
  transition: "0.3s",
  cursor: "pointer",
},

  mainContent: {
    flex: 1,
    padding: "30px",
  },

  heading: {
    marginBottom: "30px",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },

  statusBox: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
  },
};

export default App;