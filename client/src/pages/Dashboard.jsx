import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Button from "../components/ui/Button";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const recipes = state.recipes;
  const navigate = useNavigate();

  const filteredRecipes = state.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
  );

  const sortedRecipes = [...filteredRecipes].sort((a, b) => b.id - a.id);

  const {setIsSidebarOpen} = useOutletContext()
  const handleRecipeClick = (recipe) => {
    dispatch({ type: "SET_SELECTED", payload: recipe });
    setIsSidebarOpen(true);
  }

  console.log("Recipes in Dashboard:", recipes);

  return (
    <>
      <div className="px-10 py-3 mt-8 flex flex-row flex-wrap items-center justify-between">
        <div className="cursor-default">
          <h2 className="font-bold text-[3.5rem]">Your Kitchen</h2>
          <p className="text-lg text-gray-600">
            Curate, curate and plate your culnary adventures
          </p>
        </div>
        <Link
          to="/add"
          onClick={() => dispatch({ type: "SET_SELECTED", payload: null })}
        >
          <Button className="px-6">
            <img src="./plus.svg" alt="" />
            Add Recipe
          </Button>
        </Link>
      </div>

      <div className="mt-10 px-10">
        {sortedRecipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-gray-400 text-xl">
              No recipes found matching{" "}
              <span className="text-blue-500">{state.searchQuery}</span>
            </p>
            <button
              onClick={() => dispatch({ type: "SET_SEARCH", payload: "" })}
              className="text-[#e63946] mt-2 underline cursor-pointer"
            >
              <img className="h-15" src="./clear.svg" alt="Clear Search" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {(() => {
              if (sortedRecipes.length === 0) return null;

              const latest = sortedRecipes[0];
              const others = sortedRecipes.slice(1);

              return (
                <>
                  <div
                    className="relative w-full h-100 overflow-hidden rounded-t-3xl shadow-xl group cursor-pointer"
                    onClick={() => handleRecipeClick(latest)}
                  >
                    <img
                      src={latest.imageLink || "./cover-template.jpg"}
                      alt={latest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <button
                      className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch({
                          type: "TOGGLE_FAVORITE",
                          payload: latest.id,
                        });
                      }}
                    >
                      <span className="text-xl">
                        {latest.isFavorite ? (
                          <img className="w-5" src="./liked.png" />
                        ) : (
                          <img className="w-5" src="./like.png" />
                        )}
                      </span>
                    </button>

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] font-bold tracking-wider text-green-400 uppercase bg-green-900/80 rounded-full">
                        Recently Added
                      </span>
                      <h2 className="text-4xl font-bold text-white mb-2 font-serif">
                        {latest.name}
                      </h2>
                      <div className="flex items-center gap-4 text-sm font-medium text-gray-200">
                        <span>{latest.prepTime} mins</span>
                        <span>•</span>
                        <span>{latest.servings} people</span>
                        <span className="ml-auto text-green-400 font-bold uppercase tracking-tighter text-xs">
                          Chef's Choice
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6">
                    {others.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="bg-white rounded-3xl cursor-pointer w-74 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        onClick={() =>
                          handleRecipeClick(recipe)
                        }
                      >
                        <img
                          className="rounded-t-2xl w-full h-48 object-cover hover:scale-105 inset-0 transition-transform duration-500"
                          src={recipe.imageLink || "./cover-template.jpg"}
                          alt={recipe.name}
                        />
                        <h3 className="text-xl font-semibold mt-3 px-4 truncate">
                          {recipe.name}
                        </h3>
                        <p className="text-gray-600 px-4">
                          {recipe.prepTime} mins • {recipe.servings} people
                        </p>
                        <button
                          className={`mt-3  px-4 pb-4 cursor-pointer ${recipe.isFavorite ? "text-red-500" : "text-gray-400"}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch({
                              type: "TOGGLE_FAVORITE",
                              payload: recipe.id,
                            });
                          }}
                        >
                          {recipe.isFavorite ? (
                            <img className="w-5" src="./liked.png" />
                          ) : (
                            <img className="w-5" src="./like.png" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
