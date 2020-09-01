const executeQuery = require("../MySQLExecuteQuery");
const mysql = require("mysql");

const findRecordBySuffix = (suffix, success, error) => {
  let query = `SELECT * FROM suffix_mapper where suffix = '${suffix}'`;
  executeQuery(query, (result) => {
    if (result.length > 1) {
      error("Duplicate Records");
    }
    success(result[0]);
  });
};

const saveSingleRecord = (suffix, destinationUrl, success) => {
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
    success(result[0]);
  });
};

module.exports = {
  findRecordBySuffix,
  saveSingleRecord,
};
