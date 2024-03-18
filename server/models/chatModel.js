const mongoose = require('mongoose');

//Define schema for a chat
const chatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Chat = mongoose.models("Chat", chatSchema);

module.exports = Chat;