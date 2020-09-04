export const validateSuffix = (suffix: string):Boolean => {
  const validCharacters = /^[0-9a-zA-Z]+$/;
  return validCharacters.test(suffix);
};