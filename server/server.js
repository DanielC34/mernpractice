const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/convocafe", {
    newUrlParser: true,
    newUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("Landing Page!");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
