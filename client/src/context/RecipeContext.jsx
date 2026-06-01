import React, { createContext, useEffect, useReducer } from 'react';
import { recipeReducer, initialState } from './RecipeReducer.js';
import axios from 'axios';

export const RecipeContext = createContext();

const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api/recipes'
    : 'https://food-recipe-app-o49v.onrender.com/api/recipes';

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                const {data} = await axios.get(API_URL)
                dispatch({type: 'SET_RECIPES', payload: data})
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
    }
    loadRecipes();
    }, [])

    const addRecipeToDB = async (recipeData) => {
        try {
            const {data} = await axios.post(API_URL, recipeData)
            dispatch({type: 'ADD_RECIPE', payload: data})
        } catch (error) {
            alert('Failed to add recipe');
        }
    }

    const deleteRecipeFromDB = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({type: 'DELETE_RECIPE', payload: id})
    } catch (err) {
        console.error(err);
        throw err;
    }
};

    const updateRecipeInDB = async (id, updatedData) => {
        try {
            const {data} = await axios.put(`${API_URL}/${id}`, updatedData)
            dispatch({type: 'UPDATE_RECIPE', payload: data})
        } catch (error) {
            alert('Failed to update recipe');
        }
    }

    const toggleFavoriteInDB = async (id, currentStatus) => {
        try {
            const {data} = await axios.put(`${API_URL}/${id}`, { isFavorite: !currentStatus })
            dispatch({type: 'UPDATE_RECIPE', payload: data})
        } catch (error) {
            alert('Could not toggle favorite');
        }
    }

    return (
        <RecipeContext.Provider value={{ state, dispatch, addRecipeToDB, deleteRecipeFromDB, updateRecipeInDB }}>
            {children}
        </RecipeContext.Provider>
    );
}