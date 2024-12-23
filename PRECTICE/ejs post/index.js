const express = require('express');
const connection = require('./config/db');
const app = express();

// Middleware: Yeh JSON data ko samajhne me help karta hai
app.use(express.json());

// POST Route
app.post('/signup', (req, res) => {
    const userData = req.body; // Client ka bheja hua data
    console.log("Received Data:", userData);

    // (Example validation aur save operation)
    if (!userData.name || !userData.email || !userData.password) {
        return res.status(400).send({ error: "All fields are required!" });
    }

    // Success Response
    res.status(201).send({
        message: "User signed up successfully!",
        user: userData,
    });
});

// Server Start
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');

    connection();
});
