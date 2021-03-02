require("."); // instantiate a database connection
const { connection } = require("mongoose");
const {
  seedPeople,
  // seedShots,
  // seedProductions,
  // seedEquipment,
} = require("./seeds");

// delete all collections and documents
connection.dropDatabase();

const seedDatabase = async () => {
  try {
    await seedPeople();
    // await seedShots();
    // await seedEquipment();
    // await seedProductions();
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};

seedDatabase();
