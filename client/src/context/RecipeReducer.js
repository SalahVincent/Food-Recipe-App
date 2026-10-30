export const initialState = {
    recipes: JSON.parse(localStorage.getItem('myRecipes')) || [],
    searchQuery: '',
    selectedRecipe: null,
    loading: true,
}

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                loading: false,
            }
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case 'UPDATE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
            }
        case 'SET_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selectedRecipe: action.payload
            }
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe)
            }
        default:
            return state;
    }
}