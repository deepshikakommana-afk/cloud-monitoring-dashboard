import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function MonitoringChart() {
  
  const data = [
    { time: "1PM", cpu: 45 },
    { time: "2PM", cpu: 52 },
    { time: "3PM", cpu: 61 },
    { time: "4PM", cpu: 58 },
    { time: "5PM", cpu: 68 },
    { time: "6PM", cpu: 72 },
  ];

  return (
    <div style={styles.chartBox}>
      <h2 style={styles.heading}>
        CPU Usage Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis dataKey="time" stroke="#cbd5e1" />

          <YAxis stroke="#cbd5e1" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#38bdf8"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  chartBox: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "30px",
  },

  heading: {
    marginBottom: "20px",
  },
};

export default MonitoringChart;