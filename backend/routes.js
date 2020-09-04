const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;
const UrlUtil = require("./util/UrlUtil");
const ResponseUtil = require("./util/ResponseUtil");
const URLShortenerRepository = require("./repository/URLShortenerRepository");
const { validateSuffix } = require("./util/FormValidator");

const routes = (app) => {
  app.get(baseRouteOf("/:suffix"), (req, res) => {
    const suffix = req.params.suffix;
    if (validateSuffix(suffix)) {
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
    } else {
      ResponseUtil.unprocessibleEntity(
        res,
        "suffix should only consist of alphanumeric characters"
      );
    }
  });

  app.post(apiRouteOf("/submit"), (req, res) => {
    // Check suffix contains valid characters
    const suffix = req.body.form.suffix_;
    const destinationUrl = req.body.form.destinationUrl_;

    if (validateSuffix(suffix)) {
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
              shortenedUrl: "suffix already exists",
            });
          }
        },
        (error) => {
          if (error) ResponseUtil.unprocessibleEntity(res, error);
        }
      );
    } else {
      ResponseUtil.unprocessibleEntity(
        res,
        "suffix should only consist of alphanumeric characters"
      );
    }
  });
};

const generateShortendUrl = (req, suffix) => {
  return `${req.protocol}://${req.headers.host}/${suffix}`;
};

exports.routes = routes;
