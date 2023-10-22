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
app.use(express.static('views'));

mysqlConnection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

router.get('/', (req, res) => {
  res.render('filemanager');
});

router.post('/upload-course', (req, res) => {
  const { id, title, description, image, video, objective1, objective2} = req.body;

  mysqlConnection.query('INSERT INTO courses (title, description, image, video, objective1, objective2) VALUES (?, ?, ?, ?, ?, ?)', [title, description, image, video, objective1, objective2], (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Error uploading course' });
    } else {
      res.json({ success: true, message: 'Course uploaded successfully!' });
    }
  });
});

module.exports = router;

