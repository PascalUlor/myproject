import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import recipesRoute from '../server/routes/reciperoutes';

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Home page route
app.get('/', (req, res) => {
    res.status(200);
    res.json({
        name: 'Don Ulor',
        message: 'Welcome to More-Recipes'
    });
});

// API Routes
app.use('/api/', recipesRoute);

// Trivial Route
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Invalid routes'
    });
});


// Port listener
app.listen(port, () => console.log(`Application started on port ${port}`));
export default app;