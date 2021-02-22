const { model, Schema } = require("mongoose");

const personSchema = new Schema({
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
  },
});

module.exports = model("person", personSchema);
