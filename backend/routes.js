const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;
const ResponseUtil = require("./util/ResponseUtil");
const URLShortenerRepository = require("./repository/URLShortenerRepository");

const getReqSuccess = (result) => {
  if (result) {
    if (!result.destination_url.startsWith("http"))
      destinationURL = "http://" + result.destination_url;
    else destinationURL = result.destination_url;
    res.redirect(destinationURL);
  } else {
    ResponseUtil.notFound(res, "url not found");
  }
};

const postReqSuccess = (result) => {
  if (!result) {
    URLShortenerRepository.saveSingleRecord(
      db,
      suffix,
      destinationUrl,
      (data) => {
        ResponseUtil.success(res, {
          shortenedUrl: generateShortendUrl(req, suffix),
        });
      },
      errorHandler
    );
  } else {
    ResponseUtil.unprocessibleEntity(res, "Suffix Already Exists");
  }
};

const errorHandler = (error) => {
  if (error) {
    ResponseUtil.unprocessibleEntity(res, error);
  }
};

const routes = (app, db) => {
  app.get(baseRouteOf("/:suffix"), (req, res) => {
    const suffix = req.params.suffix;
    URLShortenerRepository.findRecordBySuffix(
      db,
      suffix,
      getReqSuccess,
      errorHandler
    );
  });
  app.post(apiRouteOf("/submit"), (req, res) => {
    // Check suffix contains valid characters
    const suffix = req.body.form.suffix_;
    const destinationUrl = req.body.form.destinationUrl_;

    URLShortenerRepository.findRecordBySuffix(
      db,
      suffix,
      postReqSuccess,
      errorHandler
    );
  });
};

const generateShortendUrl = (req, suffix) => {
  return `${req.protocol}://${req.headers.host}/${suffix}`;
};

exports.routes = routes;
