// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const seeder = require("../seeder");
const { Production } = require("../../models");

const generateProduction = () => ({
  name: `${faker.company.companyName()} - ${faker.commerce.productName()}`,
  brief: faker.lorem.paragraph(),
});

module.exports = async amount =>
  seeder({
    model: Production,
    plural: "Productions",
    generateDoc: generateProduction,
    amount: amount || 10,
  });
