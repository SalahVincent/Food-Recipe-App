import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
    try {
        const { name, description, ingredients, instructions, imageLink } = req.body;
        const recipe = await Recipe.create({ name, description, ingredients, instructions, imageLink });
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

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findByPk(id);

    if (!recipe) {
      return res.status(404).json({ message: `Recipe with ID ${id} not found` });
    }

    await recipe.update(req.body);
    
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json({ message: 'Recipe deleted successfully' });
        }
        throw new Error('Recipe not found');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};