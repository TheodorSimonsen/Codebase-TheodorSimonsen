// IMPORTS (NPM I)
//===========================================================
const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const pjson = require('./package.json');
const debug = require('debug');
const session = require('express-session');
const mysql = require('mysql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1238;

// SERVER
//===========================================================
const app = express();

// CONFIQ SHIT
//===========================================================

app.set('views', 'views');           // In which folder are views located
app.set('view engine', 'ejs');       // Which view engine to use
app.use(express.static('./public')); // Where are static files located

app.use(bodyParser.json());          // Accept JSON objects

// Accept extended form elements in requests
app.use(bodyParser.urlencoded({
	'extended': true
}));

// Setup session handling
app.use(session({
	'resave': false,
	'saveUninitialized': true,
	'secret': 'really secret stuffs'
}));

app.use(logger('dev'));	


// ROUTES
//===========================================================

app.get('/', (req, res, next) => {
    res.render('page');
});

// SERVER INIT
// ==========================================================
app.listen(port, () => {
    console.log('Yep, its working')
});