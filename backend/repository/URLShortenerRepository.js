const executeQuery = require("../util/mysql/MySQLExecuteQuery");
const mysql = require("mysql");

const findRecordBySuffix = (suffix) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM suffix_mapper where suffix = '${suffix}'`;
    executeQuery(query, (result) => {
      if (result.length > 1) {
        reject("Duplicate Records");
      }
      resolve(result[0]);
    });
  });
};

const saveSingleRecord = (suffix, destinationUrl) => {
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO suffix_mapper 
            (
                suffix, destination_url
            )
            VALUES
            (
                ?, ?
            )`;

    query = mysql.format(query, [suffix, destinationUrl]);
    executeQuery(query, (result) => {
      resolve(suffix);
    });
  });
};

module.exports = {
  findRecordBySuffix,
  saveSingleRecord,
};
