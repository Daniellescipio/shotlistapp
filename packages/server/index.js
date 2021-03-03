const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./database");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/productions", require("./routes/productionRouter"));
app.use("/scenes", require("./routes/sceneRouter"));
app.use("/people", require("./routes/personRouter"));
app.use("/shots", require("./routes/shotRouter"));

app.use((err, _, res) => {
  console.log(err); // eslint-disable-line
  res.send({ error: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`); // eslint-disable-line
});
