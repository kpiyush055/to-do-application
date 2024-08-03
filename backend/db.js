const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://piyushkumardev1012:Skmkpkuk-8@cluster0.rom02zg.mongodb.net/todo")

const todoScheama = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
    
})

const todo = mongoose.model('todo',todoScheama);

module.exports = {
    todo
}