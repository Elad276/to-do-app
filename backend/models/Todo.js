const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Task name is required'],
        minlength: 3,
        maxlength: 30,
    },
    description:{
        type: String,
        maxlength: 50,
    },
    deadline:{
        type: Date,
    },
    priority:{
        type: String,
        enum: ['none', 'low', 'medium', 'high'],
        default: 'none',
    },
    completed:{
        type: Boolean,
        default: false,
    },
},
 {
    timestamps: true 
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;