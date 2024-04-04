const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const { notFoundError, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();

//Accepts JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running successfully!");
});

app.use("/api/user", userRoutes);

app.use(notFoundError);
app.use(errorHandler); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
