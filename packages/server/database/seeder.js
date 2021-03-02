const { connection } = require("mongoose");

module.exports = async ({ model: Model, plural, generateDoc, amount }) => {
  // eslint-disable-next-line no-console
  console.log(`Seeding ${amount} ${plural} into ${connection.name}`);

  const docs = await Promise.all(
    Array.from({ length: amount }).map(async () => generateDoc())
  );

  const collection = Model.insertMany(docs);
  // eslint-disable-next-line no-console
  console.log(`${plural}: ${collection}`);
  return collection;
};
