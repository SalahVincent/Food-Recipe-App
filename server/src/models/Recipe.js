import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Recipe = sequelize.define("Recipe", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    prepTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Recipe;