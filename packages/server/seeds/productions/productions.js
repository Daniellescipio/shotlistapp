// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const repeater = require("../../helpers/generateSeedData.js");
const { shotsArray, sceneSeeds } = require("../shotSeeds");

const productionGenerator = () => {
  return {
    name: `${faker.company.companyName()} - ${faker.commerce.productName()}`,
    brief: faker.lorem.paragraph(),
    scenes: sceneSeeds,
    shots: shotsArray,
  };
};

// console.log(repeater(8, productionGenerator));
module.exports = repeater(10, productionGenerator);
