const app = require("./src/app");

const PORT = 5000;

app.listen(process.env.PORT | PORT, () =>
  console.log(`Listening on port ${PORT}.`)
);
