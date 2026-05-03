const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect to MongoDB (service name = mongodb)
mongoose.connect('mongodb://mongodb:27017/test');

app.get('/', (req, res) => {
    res.send('Hello from Backend 🚀');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});