//11.4.4

const express = require('express'); //require express
const PORT = process.env.PORT || 3001;
const app = express(); // instantiate the server
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listen for requests
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//creating a route that the front-end can request data from

const { animals } = require('./data/animals'); //requiring the data




