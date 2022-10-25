const { application } = require('express');
const express = require('express');

const app = express();
const router = express.Router();

const server = app.listen(3000, () => {
    console.log('dev server listening on http://localhost:3000');
}); 

app.use('/recipe',express.static('./public/recipe'))

app.use(express.static('./public/home'));

app.use('/home', express.static('./public/home'));