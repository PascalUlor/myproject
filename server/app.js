import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

//Dummy variables
const recipes = [{id: 1, name:'goat meat'}, {id: 2, name:'bitter leaf'}, {id: 3, name: 'palm oil'}]

//Home page route
app.get('/', (req, res) => {
    res.status(200);
    res.json({
        name: 'Don Ulor',
        message: 'Welcome to More-Recipes'
    });
});

//Recipes Route
app.get('/api/recipes', function(req, res) {
    res.send(recipes);
});
 
app.get('/api/recipes/:id', function(req, res) {
  let id = parseInt(req.params.id, 10);
    let result = recipes.filter(r => r.id === id)[0];
 
    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});

app.post('/api/recipes', function(req, res) {
    let meal = req.body;
 console.log("meal----->",meal.id);
    if (!meal.id) {
        console.log('get here')
        return res.sendStatus(500);
    }
 
    recipes.push(meal);
    let result = recipes.filter(m => m.id === meal.id)[0];
    res.send(result);
});


//API route
app.get('/api', (req, res) => {
    res.status(200);
    res.json({
        name: 'Pascal',
        message: 'Welcome to More-Recipes'
    });
});

app.post('/api',(req,res)=>{
    console.log('This is a recipe site');
    res.send(req.body);
});

app.delete('*',(req,res)=>{
    console.log('Item deleted from recipe site');
});

app.put('*',(req,res)=>{
    console.log('Item added from recipe site');
});

//Trivial Route
app.get('*', (req, res) => {
    res.status(200);
    res.json({
        name: 'Pascal',
        message: 'Welcome to More-Recipes'
    });
});



//Port listener
app.listen(port, () => console.log(`Application started on port ${port}`));