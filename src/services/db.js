const mysql = require("mysql");
const config = require("../../config");

async function query(sql) {
  const connection = mysql.createConnection(config);

  return new Promise((resolve, reject) => {
    connection.query(sql, function (err, rows) {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

module.exports = {
  query,
};
