// Import necessary modules
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Create an instance of the express application
const app = express();

// Define the port number to run the server on
const port = 3000;

// Set up the middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: false }));

// Serve the static files in the "public" directory
app.use(express.static(path.join(__dirname, 'dan_information_form')));

// Define the route to handle form submissions
app.post('/submit-form', (req, res) => {
  // Extract the form data from the request body
  const formData = {
    Fname: req.body.Fname.trim(),
    Midname: req.body.Midname.trim(),
    Surname: req.body.Surname.trim(),
    Age: req.body.Age.trim(),
    DoB: req.body.DoB.trim(),
    Pets: req.body.PetsOtherInput.trim(),
    Country: req.body.Country.trim()
  };

  // Open a connection to the SQLite database
  const db = new sqlite3.Database('dan_form_data.htm');

  // Insert the form data into the database
  const sql = 'INSERT INTO Form_data (Fname, Midname, Surname, Age, DoB, Pets, Country) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.run(sql, [formData.Fname, formData.Midname, formData.Surname, formData.Age, formData.DoB, formData.Pets, formData.Country], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Server error: could not save form data');
    } else {
      console.log(`Form data saved: ${JSON.stringify(formData)}`);
      res.send('Form data saved successfully');
    }

    // Close the database connection
    db.close();
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
