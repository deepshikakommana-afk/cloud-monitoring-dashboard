function AlertsTable() {

  const alerts = [
    {
      id: 1,
      service: "EC2 Instance",
      status: "Critical",
      issue: "CPU usage exceeded 90%",
    },

    {
      id: 2,
      service: "Azure VM",
      status: "Warning",
      issue: "Memory usage high",
    },

    {
      id: 3,
      service: "GCP Database",
      status: "Healthy",
      issue: "Running normally",
    },
  ];

  return (
    <div style={styles.container}>

      <h2 style={styles.heading}>
        Active Alerts
      </h2>

      <table style={styles.table}>

        <thead>
          <tr>
            <th style={styles.th}>Service</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Issue</th>
          </tr>
        </thead>

        <tbody>

          {alerts.map((alert) => (

            <tr key={alert.id}>

              <td style={styles.td}>
                {alert.service}
              </td>

              <td
                style={{
                  ...styles.td,
                  color:
                    alert.status === "Critical"
                      ? "#ef4444"
                      : alert.status === "Warning"
                      ? "#facc15"
                      : "#22c55e",
                }}
              >
                {alert.status}
              </td>

              <td style={styles.td}>
                {alert.issue}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "30px",
  },

  heading: {
    marginBottom: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #334155",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #334155",
  },
};

export default AlertsTable;