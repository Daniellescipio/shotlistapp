const faker = require("faker");
const seeder = require("../seeder");
const { Scene } = require("../../models");

const generateScene = () => ({
  location: faker.address.city(),
  date: faker.date.between("3/1/21", "8/1/21"),
  notes: faker.lorem.paragraphs(),
  thumbnail: faker.image.city(),
});

module.exports = async amount =>
  seeder({
    model: Scene,
    plural: "Scenes",
    generateDoc: generateScene,
    amount: amount || 5,
  });
