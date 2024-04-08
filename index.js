//Importing necessary modules and models
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Authrouter = require("./backend/routes/AuthRoute.js");

require("dotenv").config();

// Database Connection
// Replace <username>, <password>, <cluster>, and <dbname> with your MongoDB Atlas credentials.
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection failed", err));
// Starting the Application
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
// Middleware Configuration
// Body-parser to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Cookie-parser for handling cookies
app.use(cookieParser());
// CORS for enabling Cross-Origin Resource Sharing
app.use(cors());
// Routing
// Mounting authentication-related routes under the '/api' endpoint
app.use("/api", Authrouter);
