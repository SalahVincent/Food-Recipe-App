import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Recipe = sequelize.define("Recipe", {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
    },
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
    get() {
        const rawValue = this.getDataValue('ingredients');
        return rawValue ? JSON.parse(rawValue) : [];
    }
},
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    prepTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    imageLink: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    isFavorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

export default Recipe;