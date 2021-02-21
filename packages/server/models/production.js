const { model, Schema } = require("mongoose");

const productionSchema = new Schema({
  brief: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  scenes: [
    {
      type: Schema.Types.ObjectId,
      ref: "scene",
    },
  ],
  people: [
    {
      type: Schema.Types.ObjectId,
      ref: "person",
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

module.exports = model("production", productionSchema);
