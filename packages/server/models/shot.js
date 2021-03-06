const { model, Schema } = require("mongoose");

const shotSchema = new Schema({
  shotType: {
    type: String,
  },
  description: {
    type: String,
  },
  done: {
    type: Boolean,
  },
  scene: {
    type: Schema.Types.ObjectId,
    ref: "scene",
    required: true,
  },
});

module.exports = model("shot", shotSchema);
