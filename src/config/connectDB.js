import mysql from "mysql2/promise";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "nodejsbasic",
// });
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "keep",
});

// connection.query("SELECT * FROM `users` ", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
// });

export default pool;
