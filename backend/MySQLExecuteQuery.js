const pool = require("./MySQLPoolConfiguration");

const executeQuery = (query, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      connection.release();
      throw err;
    }
    connection.query(query, (err, result) => {
      connection.release();
      if (!err) {
        callback(result);
      }
    });
    connection.on("error", (err) => {
      throw err;
    });
  });
};

module.exports = executeQuery;
