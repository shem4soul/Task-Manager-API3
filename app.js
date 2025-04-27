const express = require('express');
const app = express();
const task = require('./routes/tasks');


// middleware to parse JSON data
app.use(express.json());

// route for the home page
app.get('/hello', (req, res) => {
  res.send('Task manager App!');
})

app.use('/api/v1/tasks', task);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 