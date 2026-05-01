import express from 'express';
import cors from 'cors';
import { sequelize, connectDB } from './config/db.js';
import Recipe from './models/Recipe.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Cookbook API is running');
})

const startServer = async () => {
    await connectDB();
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully.');

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}

startServer();


