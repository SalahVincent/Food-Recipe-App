import express from 'express';
import cors from 'cors';
import { sequelize, connectDB } from './config/db.js';
import Recipe from './models/Recipe.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.send('Cookbook API is running');
})

const startServer = async () => {
    await connectDB();
    await sequelize.sync({ force: true });
    console.log('> Database synced successfully.');

    app.listen(PORT, () => {
    console.log(`> Server is running on port ${PORT}`);
    console.log(` \x1b[1m➜\x1b[0m  \x1b[1mLocal:\x1b[0m   \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
}

startServer();


