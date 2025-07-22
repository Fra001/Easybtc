const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/api", async (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing url query");

  try {
    const response = await fetch(target);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).send("Proxy fetch failed");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server listening on port ${PORT}`);
});
