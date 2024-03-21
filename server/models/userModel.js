//userModel keeps track of who is using the app with info like
// name, email, password and profile picture

const mongoose = require('mongoose');

//Define the user schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: {
        type: String,
        required: true,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin : { type: Boolean, default:false},
},
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

//Creates a User model based on the schema
const User = mongoose.model("User", userSchema);

//Exports User model created
module.exports = User;