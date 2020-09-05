const mysql = require("mysql");

const dbPool = () => {
  var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    debug: process.env.NODE_ENV.trim() === "development",
  });

  return pool;
};

module.exports = dbPool();
