const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from express!');
})

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));