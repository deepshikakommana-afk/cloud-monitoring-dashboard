function DashboardCard({ title, value }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>

      <p style={styles.value}>
        {value}
      </p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer",
  },

  value: {
    marginTop: "10px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#38bdf8",
  },
};

export default DashboardCard;