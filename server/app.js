import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

//Home page route
app.get('/', (req, res) => {
    res.status(200);
    res.json({
        name: 'Don Ulor',
        message: 'Welcome to More-Recipes'
    });
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