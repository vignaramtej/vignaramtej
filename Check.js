const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

connection.connect();

// Serve static files (e.g., CSS)
// app.use(express.static('views'));
// app.use(session({
//   secret: 'abhi', // A secret key for session data encryption
//   resave: false,
//   saveUninitialized: true,
// }));
// app.use((req, res, next) => {
//   const stdID = req.session.stdID; // Get the mentor_id from the session

//   // Fetch common mentor data based on the mentor_id
//   const query = 'SELECT m_name, m_email FROM mentors WHERE mentor_id = ?';
//   connection.query(query, [stdID], (err, results) => {
//     if (err) {
//       console.error('Error fetching common Mentor data:', err);
//       return next(err); // Pass the error to the error-handling middleware
//     }
//     if (results.length > 0) {
//       const commonStudentData = results[0];
//       res.locals.commonStudentData = commonStudentData; // Make common student data available to all routes
//       console.log(results);
//       console.log('Common student data:', commonStudentData); // Add this line for debugging
//   }
//     next();
//   });
// });

app.post('/register', (req, res) => {
    const { Fname, Lname, email, mobile, study, password } = req.body;

    const query = "INSERT INTO students (Fname, Lname, email, mobile, study, password) VALUES ('"+Fname+"', '"+Lname+"', '"+email+"','"+mobile+"','"+study+"','"+password+"')";
    connection.query(query, (error, result) => {
        if (error) throw error;

        const studentId = result.insertId ; // Assuming result.insertId contains the newly inserted student's ID
        assignRandomMentor(studentId);

        res.redirect('/success/' + studentId); // Pass studentId as a parameter
    });
});  

// app.post('/studentlogin', (req, res) => {
    
//   let { Fname, Lname, email, mobile, study, password, mentor_id} = req.body;

//   // console.log(req.body);
//   const query = "SELECT * FROM students WHERE email ='"+email+"' AND password = '"+password+"'";
//   connection.query(query,(err, results) => {
//       if (err) {
//         console.error('MySQL query error:', err);
//         return res.status(500).json({ message: 'An error occurred while checking login.' });
//       }
//       if (results.length === 1) {
//         const mentor_id = results[0].mentor_id; // Updated this line
//         console.log(mentor_id);
//         req.session.mentor_id = mentor_id; // Updated this line
//         let getquery = "SELECT * FROM students WHERE mentor_id = '"+mentor_id+"'"; // Updated this line
//         connection.query(getquery, (err, result) => {
//           console.log(result);      
//           if(!err){
//             const commonStudentData = res.locals.commonStudentData;

//             res.render('teacherprofile',{ data: commonStudentData});
//             console.log(result);

//           } else {
//             // Handle case where no mentor is found with the given ID
//             res.status(404).json({ message: 'Mentor not found.' });
//           }
//         });

//       } else {
//         // Render an error page with EJS
//         res.render('newlogin', { message: 'Invalid email or password' });
//       }
//   });
// });

app.get('/success/:studentId', (req, res) => {
    const studentId = req.params.studentId; // Get studentId from the URL parameter
    res.render('success', { students: studentId });
});


app.get('/SIH', (req,res) => {
  res.render('first');
});
app.get('/student', (req,res) => {
  res.render('newlogin');
});


const assignRandomMentor = (studentId) => {
    // Query the database to get a list of available mentors
    connection.query('SELECT * FROM mentors', (error, mentors) => {
      if (error) throw error;
      
      // Randomly select a mentor
      const randomMentor = mentors[Math.floor(Math.random() * mentors.length)];
      
      console.log(randomMentor);

      // Update the student's mentor_id in the database
      connection.query('UPDATE students SET mentor_id = ? WHERE id = ?', [randomMentor.mentor_id, studentId], (error, result) => {
        if (error) throw error;
        console.log(`Student with ID ${studentId} assigned to Mentor ID ${randomMentor.mentor_id}`);
      });
    });
};
  


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});