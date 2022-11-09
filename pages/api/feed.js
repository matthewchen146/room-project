const mongoose = require('mongoose');
const Recipe = require('../../schema/Recipe');

export default async function handler(req, res) {
    await mongoose.connect('mongodb://localhost:27017/test');

    // const recipe = new Recipe({
    //     title: 'new recipe',
    //     description: 'hello world'
    // });

    // await recipe.save();

    const recipes = await Recipe.find();

    res.status(200).json(recipes);
}
