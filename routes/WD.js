const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const app = express();
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

mysqlConnection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

router.get('/', (req, res) => {

    mysqlConnection.query("SELECT * FROM courses", (error, rows) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Error fetching courses' });
      } else {
        res.render('WD', { courses: rows });
      }
    });
});
  
module.exports = router;
  