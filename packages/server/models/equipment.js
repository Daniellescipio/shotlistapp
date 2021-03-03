const { model, Schema } = require("mongoose");

const equipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = model("equipment", equipmentSchema);
