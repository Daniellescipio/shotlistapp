const { model, Schema } = require("mongoose");

const sceneSchema = new Schema({
  location: {
    type: String,
  },
  date: {
    type: Date,
  },
  notes: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = model("scene", sceneSchema);
