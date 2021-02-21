const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/shotlistpro",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongodb")
);

app.use("/productions", require("./routes/productionRouter"));
app.use("/scenes", require("./routes/sceneRouter"));
app.use("/people", require("./routes/personRouter"));
app.use("/shots", require("./routes/shotRouter"));

app.use((err, _, res) => {
  console.log(err);
  res.send({ error: err.message });
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
