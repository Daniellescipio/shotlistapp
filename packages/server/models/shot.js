const { model, Schema } = require("mongoose");

const shotSchema = new Schema({
  category: {
    type: String,
  },
  description: [
    {
      type: String,
    },
  ],
  done: {
    type: Boolean,
  },
  default: {
    type: Boolean,
    required: true,
    default: false,
  },
  scene: {
    type: Schema.Types.ObjectId,
    ref: "scene",
    required: true,
  },
});

module.exports = model("shot", shotSchema);
