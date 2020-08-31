const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;

const routes = (app) => {
  app.get(baseRouteOf("/:suffix"), (req, res) => {
    res.status(404).send("Cant find the specified url");
    // res.redirect("http://maplesea.com/");
    // console.log(req.params.suffix);
  });

  app.post(apiRouteOf("/world"), (req, res) => {
    // Check suffix contains valid characters

    // If suffix exist and corresponding destination url is the same, return existing shortened url

    // If suffix does not exist - Save to db

    // if suffix exist but no corresponding destination url - generate next sequence number and save to db with the suffix.
    console.log(req.body);
    res.send({
      express: `I received your POST request. This is what you sent me: ${req.body.post}`,
    });
    console.log(req.body.form.suffix_);
  });
};

exports.routes = routes;
