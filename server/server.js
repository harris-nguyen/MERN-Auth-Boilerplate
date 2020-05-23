const express = require("express");
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()


const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("mongoDB connected")
  })
  .catch(err => console.log('mongoDB error', err))

// import routes
const authRoutes = require("./routes/auth");

//  app middlewares

app.use(morgan('dev')) // status code ex in terminal: GET /api/signup 304 4.194 ms - -
app.use(bodyParser.json())

//app.use(cors()) // allow all origins
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: `http://localhost:3000` }));
}

// route middleware
app.use("/api", authRoutes);


const port = process.env.PORT || 8000;
app.listen(port, console.log(`server listening to port ${port}`));
