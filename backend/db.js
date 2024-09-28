const mongoose = require('mongoose');

mongoose.connect("")

const todoScheama = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
    
})

const Todo = mongoose.model('todo',todoScheama);

module.exports = {
    Todo
}
