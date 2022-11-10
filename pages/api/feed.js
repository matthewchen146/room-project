const mongoose = require('mongoose');
const Recipe = require('../../schema/Recipe');

export default async function handler(req, res) {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
    } catch (error) {
        res.status(404).json([]);
        return;
    }

    const recipes = await Recipe.find();

    res.status(200).json(recipes);
}
