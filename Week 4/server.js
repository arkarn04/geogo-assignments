if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// Database Config
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`MongoDB Connected`)
    })
    .catch(err => {
        console.log(`Database Error!!!`);
        console.log(err);
    })

app.get('/', (req, res) => {
    res.send('Working!!!');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})