const express = require("express");
const path = require("path");
const app = express();

// Serve static files from dist
app.use(express.static(path.join(__dirname, "../client/build")));

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "This is an example for Server-client Binding!" });
});

// All other routes -> index.html (React)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
