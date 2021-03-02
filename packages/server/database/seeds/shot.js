const faker = require("faker");
const seeder = require("../seeder");
const shotTypes = require("../data-types/shot");
const { Shot, Scene } = require("../../models");

const randomScene = () => {
  const scenes = Scene.aggregate().sample(1).exec();
  const scene = scenes[0];
  return scene._id;
};

const randomShotType = () => {
  const randomIndex = Math.floor(Math.random() * shotTypes.length);
  return shotTypes[randomIndex];
};

const generateShot = () => ({
  shotType: randomShotType(),
  complete: Math.floor(Math.random()),
  description: faker.lorem.paragraphs(),
  thumbnail: faker.image.technics(),
  referenceImage: faker.image.technics(),
  scene: randomScene(),
});

module.exports = async amount =>
  seeder({
    model: Shot,
    plural: "Shots",
    generateDoc: generateShot,
    amount: amount || 25,
  });
