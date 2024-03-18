const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//Route for handling Sign up requests
router.post("/signup", async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        //Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //Hash out the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;