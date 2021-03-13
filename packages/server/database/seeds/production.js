// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const seeder = require("../seeder");
const { Production, Person, Equipment, Shot, Scene } = require("../../models");

const randomNum = ({ min, max }) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const fetchSample = async (Model, range) => {
  const size = randomNum(range);
  const collection = await Model.aggregate().sample(size).exec();
  return collection.map(doc => doc._id);
};

// match
const matchShots = async scenes => {
  const shots = scenes.map(async sceneId => {
    // console.log("SCENEID", sceneId);
    const collection = await Shot.find({ scene: sceneId }).exec();
    // console.log("COLLECTION", collection.map(doc => doc._id).flat());
    return collection.map(doc => doc._id);
  })[0];
  return shots;
};

const generateProduction = async () => {
  const scenes = await fetchSample(Scene, { min: 1, max: 5 });
  return {
    name: `${faker.company.companyName()} - ${faker.commerce.productName()}`,
    brief: faker.lorem.paragraph(),
    startDate: faker.date.between("4/1/21", "8/1/21"),
    scenes,
    people: await fetchSample(Person, { min: 3, max: 8 }),
    equipment: await fetchSample(Equipment, { min: 3, max: 6 }),
    shots: await matchShots(scenes),
    thumbnail: "https://source.unsplash.com/random",
  };
};

module.exports = async amount =>
  seeder({
    model: Production,
    plural: "Productions",
    generateDoc: generateProduction,
    amount: amount || 10,
  });
