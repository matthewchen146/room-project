const mongoose = require('mongoose');

export default async function handler(req, res) {
    await mongoose.connect('mongodb://localhost:27017/test');

    const recipeSchema = new mongoose.Schema({
        title: String,
        description: String
    });

    const Recipe = mongoose.model('Recipe', recipeSchema);

    const recipe = new Recipe({
        title: 'new recipe',
        description: 'hello world'
    });

    await recipe.save();

    res.status(200).json({ name: 'mongo test' });
}
