const express = require('express');

const app = express();
const server = app.listen(3000, () => {
    console.log('dev server listening on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('hello');
});