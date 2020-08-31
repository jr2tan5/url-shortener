const apiRouteOf = (route) => {
  return process.env.API_URL + route;
};

const baseRouteOf = (route) => {
  return process.env.BASE_URL + route;
};

module.exports = {
  apiRouteOf: apiRouteOf,
  baseRouteOf: baseRouteOf,
};
