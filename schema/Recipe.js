const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    thumbnail: String,
    author_id: String,
    collaborators: Array,
    body: Array
});

module.exports = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);
