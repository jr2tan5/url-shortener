const express = require("express");
const bodyParser = require("body-parser");
const apiRouteOf = require("./util/RouteUtil").apiRouteOf;

const routes = () => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get(apiRouteOf("/hello"), (req, res) => {
    res.send({ express: "Hello From Express" });
  });

  app.post(apiRouteOf("/world"), (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`
    );
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
};

exports.routes = routes();
