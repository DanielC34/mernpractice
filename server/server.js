const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    res.send("Landing Page!");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
