const { model, Schema } = require("mongoose");

const sceneSchema = new Schema({
  location: {
    type: String,
  },
  date: {
    type: Date,
  },
  notes: [
    {
      type: String,
    },
  ],
  shots: [
    {
      type: Schema.Types.ObjectId,
      ref: "shot",
    },
  ],
  thumbnail: {
    type: String,
  },
});

module.exports = model("scene", sceneSchema);

