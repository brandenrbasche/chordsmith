const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const musicalKeysController = require('./controllers/musicalKeysController');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = "mongodb+srv://brandenbasche:UB6lrioh2VXE0faQ@solo-project-v1.hirjnbf.mongodb.net/";
mongoose.connect(mongoURI);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from express!');
});

app.use('/generate', )

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));