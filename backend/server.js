'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

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
  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
  }
  app.listen(port, () => console.log(`Listening on port ${port}`));

  const db = require("./MySQLConnection").connectToDB();
  require("./routes").routes(app, db); // Initialize Routes
})();
