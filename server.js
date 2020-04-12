const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5001;

const dev = app.get("env") !== "production";

if (!dev) {
  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;

  console.log("Server Started");
});
