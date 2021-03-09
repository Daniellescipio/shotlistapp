// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const seeder = require("../seeder");
const roles = require("../data-types/roles");
const { Person } = require("../../models");

const randomRole = () => {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
};

const generatePerson = () => {
  return {
    name: faker.name.findName(),
    role: randomRole(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    avatar: faker.image.cats(),
    skills: faker.lorem.words(),
  };
};

module.exports = async amount =>
  seeder({
    model: Person,
    plural: "People",
    generateDoc: generatePerson,
    amount: amount || 20,
  });
