require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const os = require("os");

const app = express();
const hostname = os.hostname();

app.use(express.json());
app.use(morgan("combined"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/", (req, res) => {
  res.status(200).json({ info: `Hello from ${hostname}` });
});

app.listen(process.env.PORT || 5000, () => console.log("Server running.."));
