require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const app = express();
const routes = require("./src/routes");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT | PORT, () =>
  console.log(`Listening on port ${PORT}.`)
);
