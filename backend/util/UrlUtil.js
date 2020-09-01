const protocalAppender = (url) => {
  if (!url.startsWith("http")) {
    url = `http://${url}`;
  }
  return url;
};

module.exports = {
  protocalAppender: protocalAppender,
};
