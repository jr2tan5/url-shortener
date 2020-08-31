var mysql = require("mysql");

export const asd = () => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "urlAdmin",
    password: "adminurl",
    database: "url_shortener",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM suffix_mapper", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
};
