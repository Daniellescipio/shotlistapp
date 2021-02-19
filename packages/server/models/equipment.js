const { model, Schema } = require("mongoose");
const equipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    validate: [
      value => value === "cameras" || value === "lens" || value === "lighting",
    ],
  },
});

module.exports = model("equipment", equipmentSchema);
