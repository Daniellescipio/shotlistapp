// Use Faker https://github.com/Marak/faker.js for random data
// const faker = require("faker");
const seeder = require("../seeder");
const { Equipment } = require("../../models");

const generateEquipment = () => {
  return {};
};

module.exports = async amount =>
  seeder({
    model: Equipment,
    plural: "Equipment",
    generateDoc: generateEquipment,
    amount: amount || 20,
  });
