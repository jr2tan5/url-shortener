const toOutputUrl = (suffix: string): string => {
  return process.env.REACT_APP_API_BASE_URL + "/" + suffix;
};

export const UrlUtil = {
  toOutputUrl,
};
