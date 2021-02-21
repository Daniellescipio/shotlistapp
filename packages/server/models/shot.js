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
  status: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    required: true,
  },
  scene: {
    type: Schema.Types.ObjectId,
    ref: "scene",
    required: true,
  },
});

module.exports = model("shot", shotSchema);
