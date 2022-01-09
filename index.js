const express = require('express');
const app = express();
const port = 3000;

let skinRoute = require('./routes/skin.route');

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', async (req, res) => {
    res.render('index', { facts: await start()});
    
})

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
})

app.use('/skin', skinRoute);

const start = async function () {
    // import
   
}

start();
