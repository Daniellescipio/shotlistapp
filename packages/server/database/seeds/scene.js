const faker = require("faker");

// use mongoose ObjectID for the _id property
// https://stackoverflow.com/questions/49441670/seeding-mongodb-data-in-node-js-by-referencing-objectid
const {
  Types: { ObjectId },
} = require("mongoose");
const repeater = require("../../helpers/generateSeedData");

const sceneGenerator = () => {
  return {
    _id: ObjectId(),
    location: faker.address.city(),
    date: faker.date.between("2/1/21", "4/1/21"),
    notes: faker.lorem.paragraphs(),
    thumbnail: faker.image.city(),
  };
};

module.exports = repeater(5, sceneGenerator);
