const express = require('express')
const chats = require('./data/data.js')
const app = express();

const dotenv = require('dotenv');
dotenv.config();


app.get('/', (req, res) => {
    res.send('API is up and running. This is the homepage');
});

app.get('/api/chat', (req, res) => {
    //Logic to fetch chat data
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const chatId = req.params.id;
  console.log("Requested chat ID:", chatId);
  const chat = chats.find((chat) => chat._id === chatId);

  if (chat) {
    res.send(chat);
  } else {
    res.status(404).send("Chat not found");
  }
});



const PORT = process.env.HTTP_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
