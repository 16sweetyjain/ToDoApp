const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({                            //defining schema for each TodoList item

    description :{
        type: String,
        required: true
    },

    done:{
        type:Boolean,
        default:false
    }
});


module.exports = mongoose.model('Todo',TodoSchema);