const { get } = require("mongoose");

const getAllTasks = (req, res) => {
  res.send('Get all items from the file' );
}

const createTask = (req, res) => {
    res.json(req.body );     
    
}

const getTask = (req, res) => {
    res.json({id:req.params.id});     
    
}
const updateTask = (req, res) => {
    res.send('Update a task' );     
    
}
const deleteTask = (req, res) => { 
    res.send('Delete a task' );     
    
}


module.exports = {
getAllTasks,
 createTask,
 getTask,
 updateTask,
deleteTask  

}   