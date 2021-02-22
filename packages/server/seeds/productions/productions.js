// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const repeater = require("../../helpers/generateSeedData");

// returns object with avatar, name, email, phone number
const productionGenerator = () => {
  return {
    name: `${faker.company.companyName()} - ${faker.commerce.productName()} `,
    brief: faker.lorem.paragraph(),
    scenes: [
      {
        location: faker.address.city(),
        date: faker.date.between("2/1/21", "4/1/21"),
        notes: faker.lorem.paragraphs(),
        thumbnail: faker.image.city(),
      },
    ],
    shots: [
      {
        category: "",
        categoryImage: "Custome Image || Default Image",
        status: "open",
        description: faker.lorem.paragraphs(),
        image: "url",
        categoryImage: faker.image.technics(),
      },
    ],
  };
};

module.exports = repeater(8, productionGenerator);
