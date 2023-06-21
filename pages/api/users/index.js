const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_user'
  });
  export default function handler(req, res) {
  connection.query(
    'SELECT * FROM `tbl_users`',
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results});
    }
  );
  }