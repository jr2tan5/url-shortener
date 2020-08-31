const toEndpointRoute = (suffix: string): string => {
  return process.env.REACT_APP_API_BASE_URL + "/" + suffix;
};

export const UrlUtil = {
  toEndpointRoute,
};
