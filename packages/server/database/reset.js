require("."); // instantiate a database connection
const { connection } = require("mongoose");
const {
  seedPeople,
  seedShots,
  seedProductions,
  seedScenes,
  seedEquipment,
} = require("./seeds");

// delete all collections and documents
connection.dropDatabase();

const seedDatabase = async () => {
  try {
    await seedPeople();
    await seedEquipment();
    await seedScenes(15);
    await seedShots(50);
    await seedProductions(5);
    connection.close();
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};

seedDatabase();
