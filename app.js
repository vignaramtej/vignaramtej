const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('views'));


const mentorsRoutes = require('./routes/mentors');
const studentsRoutes = require('./routes/students');
const courseRoutes = require('./routes/WD');
app.use('/mentors', mentorsRoutes);
app.use('/students', studentsRoutes);
app.use('/WD', courseRoutes);

app.listen(3001, () => {
  console.log(`Server is running on http://localhost:3001`);
});
