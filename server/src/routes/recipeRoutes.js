import express from "express";
import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipeController.js";

const router = express.Router();

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').put(updateRecipe).delete(deleteRecipe);

export default router;