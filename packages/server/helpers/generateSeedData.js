module.exports = (number, generatorName) => {
  return Array.from({ length: number }, () => generatorName());
};
