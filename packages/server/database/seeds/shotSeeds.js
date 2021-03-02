const faker = require("faker");
const {
  Types: { ObjectId },
} = require("mongoose");
const repeater = require("../../helpers/generateSeedData");
const shotTypes = require("../shotTypes");
const sceneSeeds = require("./sceneSeeds");

const randomSceneId = () => {
  // creates an array of scene ids to choose from
  const sceneIds = sceneSeeds.map(scene => {
    return scene._id;
  });

  const randomIndex = Math.floor(Math.random() * sceneSeeds.length);
  return sceneIds[randomIndex];
};

const randomShotType = () => {
  const randomIndex = Math.floor(Math.random() * shotTypes.length);
  return shotTypes[randomIndex];
};

const shotGenerator = () => {
  return {
    _id: ObjectId(),
    shotType: randomShotType(),
    complete: false,
    description: faker.lorem.paragraphs(),
    thumbnail: faker.image.technics(),
    referenceImage: faker.image.technics(),
    sceneId: randomSceneId(),
  };
};

const shotsArray = repeater(25, shotGenerator);

module.exports = { shotsArray, sceneSeeds };
