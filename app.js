const express = require('express');
const app = express();
const task = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware to parse JSON data
app.use(express.json());

// route for the home page
app.get('/hello', (req, res) => {
  res.send('Task manager App!');
})

app.use('/api/v1/tasks', task);

const port = 3000;  

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