require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todo');

const app = express();

//Connect to MongoDB
connectDB(process.env.MONGODB_URL);

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/todos', todoRoutes);

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));