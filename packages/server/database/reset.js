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
    await seedScenes(20);
    await seedShots(200);
    await seedProductions();
    connection.close();
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};

seedDatabase();
