const mongoose = require("mongoose");

const connectDB = async (MONGODB_URL) => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to MongoDB !');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;