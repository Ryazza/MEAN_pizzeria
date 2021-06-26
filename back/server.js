let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
let logger = require('morgan');
// routes
let PizzaRoutes = require('./routes/pizza.routes');
let BoissonRoutes = require('./routes/boisson.routes');
let DessertRoutes = require('./routes/dessert.routes');
// -----

let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/pizza', PizzaRoutes)
app.use('/boisson', BoissonRoutes)
app.use('/dessert', DessertRoutes)
// -----

// DB
let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost:27042/DominosPizza';

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// -----

module.exports = app;
