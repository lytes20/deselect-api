const express = require("express");
const cors = require("cors");

// File imports
const db = require("./src/models");
const router = require("./src/routes");

const port = parseInt(process.env.PORT, 10) || 4000;

// Initiations
const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

db.on("connected", () => {
  console.log("Database connected successfully");
  app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
  });
});
db.on("error", (error) =>
  console.log(console, "MongoDB connection error:" + error)
);
