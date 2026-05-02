import Recipe from "../models/Recipe";

export const createRecipe = async (req, res) => {
    try {
        const { name, description, ingredients, instructions } = req.body;
        const recipe = await Recipe.create({ title, description, ingredients, instructions });
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes)
    }  catch (error) {
    res.status(500).json({ error: error.message });
}
}