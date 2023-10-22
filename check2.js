const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('views'));

// Define a route to render the dashboard file
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.post('/increaseProgress', (req, res) => {
    // Simulate an increase in progress (you can replace this with your actual logic)
    let currentProgress = parseInt(req.body.progress);
    currentProgress += 10; // Increase by 10%

    // Send the updated progress back to the client
    res.json({ progress: currentProgress });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});