var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var todosRouter = require('./routes/todos');
var countryRouter = require('./routes/country');
var tokohRouter = require('./routes/tokoh');

const cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/todos', todosRouter);
app.use('/country', countryRouter);
app.use('/tokoh', tokohRouter);
app.use('/assets',express.static('assets'));

module.exports = app;
