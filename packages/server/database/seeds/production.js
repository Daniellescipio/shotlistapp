// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const seeder = require("../seeder");
const { Production, Person, Equipment, Shot } = require("../../models");

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const fetchSample = async (Model, range) => {
  const size = randomNum(...range);
  const collection = Model.aggregate().sample(size).exec();
  return collection.map(doc => doc._id);
};

const generateProduction = async () => ({
  name: `${faker.company.companyName()} - ${faker.commerce.productName()}`,
  brief: faker.lorem.paragraph(),
  people: await fetchSample(Person, { min: 3, max: 15 }),
  equipment: await fetchSample(Equipment, { min: 5, max: 10 }),
  shots: await fetchSample(Shot, { min: 10, max: 25 }),
});

module.exports = async amount =>
  seeder({
    model: Production,
    plural: "Productions",
    generateDoc: generateProduction,
    amount: amount || 10,
  });
