const express = require("express");
const cors = require("cors");

const monitorRoutes = require("./routes/monitorRoutes");

const app = express();

app.use(cors());

app.use("/api/monitor", monitorRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});