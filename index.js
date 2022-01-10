const express = require('express');
const app = express();
const port = 3000;

let skinRoute = require('./routes/skin.route');
let userRoute = require('./routes/user.route');
let userMiddleware = require('./middlewares/checkUser.middleware');
var cookieParser = require('cookie-parser')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/create-user', userRoute);
app.use('/skin', userMiddleware.requireAuth, skinRoute);

app.get('/', async (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
})



