import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'

const Favorites = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const favoriteRecipes = state.recipes.filter(recipe => recipe.isFavorite);

  return (
    <div className='px-10 py-3 mt-25 flex flex-col items-start justify-between cursor-default w-full'>
        <span className='text-[#c72533] font-semibold'>CURATED COLLECTION</span>
        <h3 className='text-[3.5rem] w-[50%] leading-17 py-1.5'>Your Culinary Favorites</h3>
        <p className='w-[70%] text-gray-600 mb-10'>A collection of your favorite recipes that you can easily access and cook anytime.</p>

        {favoriteRecipes.length === 0 ? (
          <p className="text-gray-400 italic">You haven't marked any recipes as favorites yet.</p>
        ) : (
          <div className="flex flex-wrap gap-6 w-full">
            {favoriteRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl cursor-pointer w-74 shadow-sm hover:shadow-md transition-shadow"
                onClick={() => dispatch({ type: "SET_SELECTED", payload: recipe })}
              >
                <img
                  className="rounded-t-2xl w-full h-48 object-cover"
                  src={recipe.imageLink || "./cover-template.jpg"}
                  alt={recipe.name}
                />
                <h3 className="text-xl font-semibold mt-3 px-4 truncate">{recipe.name}</h3>
                <div className="flex justify-between items-center px-4 pb-4 mt-2">
                  <p className="text-gray-600 text-sm">{recipe.prepTime || 0} mins</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "TOGGLE_FAVORITE", payload: recipe.id });
                    }}
                  >
                    <img className="w-5" src="./liked.png" alt="Unfavorite" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default Favorites;