// Use Faker https://github.com/Marak/faker.js for random data
const faker = require("faker");
const repeater = require("../../helpers/generateSeedData");
const rolesArray = require("../roles");

// returns object with avatar, name, email, phone number
const peopleGenerator = () => {
  const randomRole = () => {
    const randomIndex = Math.floor(Math.random() * rolesArray.length);
    return rolesArray[randomIndex];
  };

  return {
    name: faker.name.findName(),
    role: randomRole(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumberFormat(),
    avatar: faker.image.cats(),
    skills: faker.lorem.words(),
  };
};

module.exports = repeater(20, peopleGenerator);
