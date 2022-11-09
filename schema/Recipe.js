const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    thumbnail: String,
    author_id: String,
    collaborators: Array,
    body: Array
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
