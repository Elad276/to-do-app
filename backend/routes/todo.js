const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Create a new todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline,
        priority: req.body.priority,
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Update a todo
router.put('/:id', async (req, res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { 
                new: true,
                runValidators: true,
                timestamps: true 
            }
        );
        res.json(updateTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;