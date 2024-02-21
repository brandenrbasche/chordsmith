const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://brandenbasche:UB6lrioh2VXE0faQ@solo-project-v1.hirjnbf.mongodb.net/chord_generator?retryWrites=true&w=majority&appName=solo-project-v1";
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to database!'))
    .catch(err => console.error('Error connecting to MongoDB: ', err));

const app = express();
const port = process.env.PORT || 3000;

const generateRouter = require('./routes/generate');

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

/**
 * define route handlers:
 */
app.use('/generate', generateRouter);

app.get('/', (req, res) => {
    res.send('Hello from express!');
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));