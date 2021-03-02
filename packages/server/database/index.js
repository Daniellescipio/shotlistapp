const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const { connect, connection } = mongoose;

dotenv.config();

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

connection.on("connected", () =>
  // eslint-disable-next-line no-console
  console.log(
    `Mongoose default connection open to ${connection.host} ${connection.name}`
  )
);

connection.on("error", err =>
  // eslint-disable-next-line no-console
  console.log(`Mongoose default connection err: ${err}`)
);

connection.on("disconnected", () =>
  // eslint-disable-next-line no-console
  console.log("Mongoose default connection disconnected")
);
