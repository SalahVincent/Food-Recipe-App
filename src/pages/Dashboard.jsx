import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Button from "../components/ui/Button";

const Dashboard = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const recipes = state.recipes;

  console.log('Recipes in Dashboard:', recipes);

  return (
    <>
      <div className="px-10 py-3 mt-8 flex flex-row flex-wrap items-center justify-between">
        <div className="cursor-default">
          <h2 className="font-bold text-[3.5rem]">Your Kitchen</h2>
          <p className="text-lg text-gray-600">
            Curate, curate and plate your culnary adventures
          </p>
        </div>
        <a href="/add">
          <Button className="px-6">
            <img src="./plus.svg" alt="" />
            Add Recipe
          </Button>
        </a>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {state.recipes.length < 0 ? (
          <p className="text-gray-400">No recipes yet. Start cooking!</p>
        ) : (
          state.recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-3xl cursor-pointer"
              onClick={() => {
                console.log("Card clicked:", recipe.name);
                dispatch({ type: "SET_SELECTED", payload: recipe })
              }
              }
            >
              <img
                className="rounded-2xl w-full h-48"
                src={recipe.imageLink || "./cover-template.jpg"}
                alt={recipe.name}
              />
              <h3 className="text-xl font-semibold mt-3">{recipe.name}</h3>
              <p className="text-gray-600">{recipe.prepTime} mins • {recipe.servings} people</p>
              <button
              className={`mt-3 ${recipe.isFavorite ? 'text-red-500' : 'text-gray-400'}`}
              onClick={(e) => {
                e.stopPropagation()
                dispatch({ type: 'TOGGLE_FAVORITE', payload: recipe.id })
              }}
              >
                {recipe.isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
