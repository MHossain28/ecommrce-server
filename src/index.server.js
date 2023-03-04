const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// routes
const userRoutes = require("./routes/user");

// enveronment variable
env.config();

// mongodb connection
// mongodb+srv://<username>:<password>@cluster0.td9wdol.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.td9wdol.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(bodyParser());

app.use("./api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
