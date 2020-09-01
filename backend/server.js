"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config({
  path:
    process.env.NODE_ENV.trim() === "development"
      ? `.env.${process.env.NODE_ENV.trim()}`
      : `.env`,
}); // Load environment variables

// Self calling initialzation function
(() => {
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(
    cors({
      origin: process.env.ALLOWED_ORIGIN,
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "build")));
    // Handle React routing, return all requests to React app
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });
  }
  app.listen(port, () => console.log(`Listening on port ${port}`));

  const db = require("./MySQLConnection").connectToDB();
  require("./routes").routes(app, db); // Initialize Routes
})();
