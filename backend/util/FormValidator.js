const validateSuffix = (suffix) => {
  const validCharacters = /^[0-9a-zA-Z]+$/;
  return validCharacters.test(suffix);
};

module.exports = {
  validateSuffix: validateSuffix,
}