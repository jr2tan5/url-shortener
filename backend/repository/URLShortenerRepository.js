const findRecordBySuffix = (db, suffix, success, error) => {
  db.query(
    `SELECT * FROM suffix_mapper where suffix = '${suffix}'`,
    (err, result) => {
      if (err) throw err;

      if (result.length > 1) {
        error("Duplicate Records",db);
      }
      success(result[0],db);
    }
  );
};

const saveSingleRecord = (db, suffix, destinationUrl, success, error) => {
  var sql = `INSERT INTO suffix_mapper 
            (
                suffix, destination_url
            )
            VALUES
            (
                ?, ?
            )`;
  db.query(sql, [suffix, destinationUrl], (err, data) => {
    if (err) {
      throw err;
    } else {
      success(data[0],db);
    }
  });
};

module.exports = {
  findRecordBySuffix,
  saveSingleRecord,
};
