const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const path = require('path');

const app = express()
const port = 3000

const route = require('./routes');
const db = require('./config/mongodb');
const mysql = require('./config/mysql');

//Connect to mongoDB
db.connect();

// const user = require('./app/models/User');

// user.getAll();

// username = 'jennierubyjane'
// user.findByUsername(username);

// var newPassword = 'opss'
// user.updatePassword(username, newPassword);

// user.deleteAccount(username);

// user.getAll();

// name = 'jennie'
// username = 'jennierubyjane'
// password = 'password'

// user.createAccount(name, username, password)

// user.getAll();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true,
}
));
app.use(express.json())

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Init
route(app)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})