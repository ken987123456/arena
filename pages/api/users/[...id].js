// Next.js API route support: https://nextjs.org/docs/api-routes/introductio
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_user'
  });
  export default function handler(req, res) {
    const { id } = req.query
  connection.query(
    'SELECT * FROM `tbl_users` WHERE `id` = ? ',[id],
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results});
    }
  );
  }