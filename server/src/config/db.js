import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Required for self-signed certificates on cloud hosts like Render
    }
  }
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { sequelize, connectDB };