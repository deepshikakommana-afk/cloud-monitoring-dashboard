function CloudProviderCard({
  provider,
  region,
  services,
  status,
}) {
  return (
    <div style={styles.card}>

      <h2 style={styles.provider}>
        {provider}
      </h2>

      <p>
        Region: {region}
      </p>

      <p>
        Active Services: {services}
      </p>

      <p
        style={{
          color:
            status === "Healthy"
              ? "#22c55e"
              : "#ef4444",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        {status}
      </p>

    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "20px",
  },

  provider: {
    marginBottom: "15px",
    color: "#38bdf8",
  },
};

export default CloudProviderCard;