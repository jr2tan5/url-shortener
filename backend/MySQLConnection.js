require("dotenv").config(); // Load environment variables
var mysql = require("mysql");

const connectToDB = () => {
  var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log("MYSQL DB is Connected!");
  });

  return connection;
};

module.exports = {
  connectToDB: connectToDB,
};
