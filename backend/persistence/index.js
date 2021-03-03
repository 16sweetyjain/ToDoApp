const mongoose =require('mongoose');

mongoose.Promise = global.Promise;

(async() => {
    await mongoose.connect('mongodb://localhost:27017/todos',                        //setting up connection with database
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
})()

module.exports = require('./repository/todoRepository.js');