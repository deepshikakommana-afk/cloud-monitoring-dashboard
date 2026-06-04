const express = require("express");

const router = express.Router();

router.get("/stats", (req, res) => {

  const cpuUsage = Math.floor(Math.random() * 40) + 40;

  const memoryUsage = Math.floor(Math.random() * 30) + 50;

  const diskUsage = Math.floor(Math.random() * 20) + 40;

  const networkTraffic =
    Math.floor(Math.random() * 200) + " Mbps";

  const alerts = Math.floor(Math.random() * 5);

  res.json({
    cpuUsage: `${cpuUsage}%`,
    memoryUsage: `${memoryUsage}%`,
    diskUsage: `${diskUsage}%`,
    networkTraffic,
    serverStatus: "Running",
    activeAlerts: alerts,
    cloudProvider: "AWS",
  });

});

module.exports = router;