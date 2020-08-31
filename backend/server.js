const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); //Load environment variables

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
  app.listen(port, () => console.log(`Listening on port ${port}`));
  require("./routes").routes(app); //Initialize Routes
})();
