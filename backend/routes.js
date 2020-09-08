const apiRouteOf = require("./util/RouteUtil").apiRouteOf;
const baseRouteOf = require("./util/RouteUtil").baseRouteOf;
const UrlUtil = require("./util/UrlUtil");
const ResponseUtil = require("./util/ResponseUtil");
const URLShortenerRepository = require("./repository/URLShortenerRepository");
const { validateSuffix } = require("./util/FormValidator");

const routes = (app) => {
  app.get(baseRouteOf("/:suffix"), async (req, res) => {
    try {
      const suffix = req.params.suffix;
      if (validateSuffix(suffix)) {
        const result = await URLShortenerRepository.findRecordBySuffix(suffix);
        if (result) {
          res.redirect(UrlUtil.protocalAppender(result.destination_url));
        } else {
          ResponseUtil.notFound(res, "url not found");
        }
      } else {
        ResponseUtil.unprocessibleEntity(
          res,
          "suffix must not be empty and should only consist of alphanumeric characters"
        );
      }
    } catch (error) {
      ResponseUtil.unprocessibleEntity(res, error);
    }
  });

  app.post(apiRouteOf("/submit"), async (req, res) => {
    try {
      const suffix = req.body.form.suffix_;
      const destinationUrl = req.body.form.destinationUrl_;

      if (validateSuffix(suffix)) {
        const result = await URLShortenerRepository.findRecordBySuffix(
          suffix
        ).catch((error) => {
          ResponseUtil.unprocessibleEntity(res, error);
        });
        if (!result) {
          const savedResult = await URLShortenerRepository.saveSingleRecord(
            suffix,
            destinationUrl
          );
          ResponseUtil.success(res, {
            shortenedUrl: generateShortendUrl(req, savedResult),
          });
        } else {
          ResponseUtil.unprocessibleEntity(res, "suffix already exists");
        }
      } else {
        ResponseUtil.unprocessibleEntity(
          res,
          "suffix must not be empty and should only consist of alphanumeric characters"
        );
      }
    } catch (error) {
      ResponseUtil.unprocessibleEntity(res, error);
    }
  });
};

const generateShortendUrl = (req, suffix) => {
  return `${req.protocol}://${req.headers.host}/${suffix}`;
};

exports.routes = routes;
