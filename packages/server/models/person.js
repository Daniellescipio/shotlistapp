const { model, Schema } = require("mongoose");

const personSchema = new Schema({
  avatar: {
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
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = model("person", personSchema);
