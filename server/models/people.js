const { model, Schema } = require("mongoose");

const peopleSchema = new Schema({
  headshot: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  skills: {
    type: Array,
  },
  role: {
    type: String,
    validate: [
      value =>
        value === "talent" ||
        value === "director" ||
        value === "photographer" ||
        value === "producer",
      `The {PATH} can only be talent, director, photographer, or producer`,
    ],
  },
});

module.exports = model("people", peopleSchema);
