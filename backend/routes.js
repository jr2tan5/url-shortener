const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;
const UrlUtil = require("./util/UrlUtil");
const ResponseUtil = require("./util/ResponseUtil");
const URLShortenerRepository = require("./repository/URLShortenerRepository");

const routes = (app) => {
  app.get(baseRouteOf("/:suffix"), (req, res) => {
    const suffix = req.params.suffix;
    URLShortenerRepository.findRecordBySuffix(
      suffix,
      (result) => {
        if (result)
          res.redirect(UrlUtil.protocalAppender(result.destination_url));
        else ResponseUtil.notFound(res, "url not found");
      },
      (error) => {
        if (error) ResponseUtil.unprocessibleEntity(res, error);
      }
    );
  });

  app.post(apiRouteOf("/submit"), (req, res) => {
    // Check suffix contains valid characters
    const suffix = req.body.form.suffix_;
    const destinationUrl = req.body.form.destinationUrl_;

    URLShortenerRepository.findRecordBySuffix(
      suffix,
      (result) => {
        if (!result) {
          URLShortenerRepository.saveSingleRecord(
            suffix,
            destinationUrl,
            (result) => {
              ResponseUtil.success(res, {
                shortenedUrl: generateShortendUrl(req, suffix),
              });
            },
            (error) => {
              if (error) ResponseUtil.unprocessibleEntity(res, error);
            }
          );
        } else {
          ResponseUtil.unprocessibleEntity(res, {
            shortenedUrl: "Suffix Already Exists",
          });
        }
      },
      (error) => {
        if (error) ResponseUtil.unprocessibleEntity(res, error);
      }
    );
  });
};

const generateShortendUrl = (req, suffix) => {
  return `${req.protocol}://${req.headers.host}/${suffix}`;
};

exports.routes = routes;
