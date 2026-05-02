import express from "express";
import { getRecipes, createRecipe } from "../controllers/recipeController";

const router = express.Router();

router.route('/').get(getRecipes).post(createRecipe);

export default router;