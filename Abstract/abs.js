const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('views'));

// Define a route to render the dashboard file
app.get('/abstract', (req,res) => {
    res.render('abstract');
});

app.listen(3002, () => {
    console.log(`Server is running`);
});