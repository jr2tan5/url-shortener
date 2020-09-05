const path = require("path");

const loadHtml = (express, app) => {
  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "build")));
    // Handle React routing, return all requests to React app
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../../build", "index.html"));
    });
  }
};

module.exports = loadHtml;
