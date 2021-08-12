require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

var allowedOrigins = ["http://localhost:4200"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);

module.exports = app;
