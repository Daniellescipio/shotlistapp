// @param number - number of objects to create
// @param generatorName - name of generator function to run
// @returns an array of objects

module.exports = (number, generatorName) => {
  return Array.from({ length: number }, () => generatorName());
};
