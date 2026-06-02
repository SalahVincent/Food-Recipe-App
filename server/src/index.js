import express from 'express';
import cors from 'cors';
import { sequelize, connectDB } from './config/db.js';
import Recipe from './models/Recipe.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://food-recipe-35l6zqz55-vincent-salahs-projects.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
  },
  credentials: true
}));

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


