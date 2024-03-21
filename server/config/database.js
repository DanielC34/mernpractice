const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Function to establish MongoDB connection
const connectDB = async () => {
    try {
        //Attempts to connect to MongoDB
        const con = await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        //Successful connection message
    console.log(`MongoDb connected: ${con.connection.host}`)
    } catch (err) {
        //Error connection message
        console.log(`Connection error to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

//Export the connectDB function to be used elsewhere
module.exports = connectDB;