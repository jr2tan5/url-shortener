const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;

const routes = (app) => {
  app.get(baseRouteOf("/:suffix"), (req, res) => {
    res.status(404).send("Cant find the specified url");
    // res.redirect("http://maplesea.com/");
    // console.log(req.params.suffix);
  });

  app.post(apiRouteOf("/submit"), (req, res) => {
    // Check suffix contains valid characters

    // If suffix exist and corresponding destination url is the same, return existing shortened url

    // If suffix does not exist - Save to db

    // if suffix exist but no corresponding destination url - generate next sequence number and save to db with the suffix.

    res.send({
      shortenedUrl: generateShortendUrl(req),
    });
  });
};

const generateShortendUrl = (req) => {
  return `${req.protocol}://${req.headers.host}/${req.body.form.suffix_}`;
};

exports.routes = routes;
