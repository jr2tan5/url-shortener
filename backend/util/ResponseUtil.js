const { StatusCodes } = require("http-status-codes");

const success = (res, data) => {
  res.status(StatusCodes.OK).send(data);
};

const notFound = (res, message) => {
  res.status(StatusCodes.NOT_FOUND).send(message);
};

const unprocessibleEntity = (res, message) => {
  res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(message);
};

module.exports = {
  success,
  notFound,
  unprocessibleEntity,
};
