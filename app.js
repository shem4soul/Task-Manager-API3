const express = require('express');
const app = express();
const task = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler'); 


// middleware to parse JSON data
app.use(express.static('./public'));
app.use(express.json());


// route for the home page

app.use('/api/v1/tasks', task);

// catch-all for routes that do not exist
app.use(notFound);

// error handler middleware - this should be after your routes and notFound middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;  

const start = async () => { 
  try {
    // connect to the database
    await connectDB(process.env.MONGO_URI);
    // start the server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();  