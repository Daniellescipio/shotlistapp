// Use Faker https://github.com/Marak/faker.js for random data
// const faker = require("faker");
const seeder = require("../seeder");
const { Equipment } = require("../../models");
const equipmentList = require("../data-types/equipmentItems");

const generateEquipment = () => {
  const randomItem = Math.floor(Math.random() * equipmentList.length);
  return equipmentList[randomItem];
};

module.exports = async amount =>
  seeder({
    model: Equipment,
    plural: "Equipment",
    generateDoc: generateEquipment,
    amount: amount || 10,
  });
