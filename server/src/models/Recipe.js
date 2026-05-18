// recipe.js
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
    field: 'prep_time' // <--- MAPS TO YOUR EXACT DB COLUMN
  },
  servings: {
  type: DataTypes.INTEGER,
  allowNull: true,
  defaultValue: 1,
  field: 'servings' // Maps cleanly to postgres
  },
  imageLink: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
    field: 'image_link' // <--- MAPS TO DB COLUMN (fixes the missing column issue)
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_favorite' // <--- MAPS TO YOUR EXACT DB COLUMN
  }
}, {
  // Tells Sequelize to map camelCase timestamps to snake_case DB columns
  underscored: true, 
  tableName: 'recipes' // Forces it to look at the exact table you queried in terminal
});

export default Recipe;