// @param number - number of objects to create
// @param generatorName - name of generator function to run
// @returns an array of objects

const repeater = (number, generatorName) => {
  return Array.from({ length: number }, () => generatorName())
}

module.exports = repeater