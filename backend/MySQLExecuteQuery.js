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
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        connection.release();                       // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  });
};

module.exports = executeQuery;
