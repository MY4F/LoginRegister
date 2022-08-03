const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();
const dotenv=require('dotenv').config();
//DB config
const db = require('./config/keys').MongoURI;
const hostname = '0.0.0.0';
//passport config
require('./config/passport')(passport);
// CLOUDINARY IMAGE DB
const cloudinary= require('cloudinary').v2;

cloudinary.config({
    cloud_name:require('./config/keys').CLOUDINARY_CLOUD_NAME,
    api_key:require('./config/keys').CLOUNDINARY_API_KEY,
    api_secret:require('./config/keys').CLOUDINARY_API_SECRET
})

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  console.log("mongo db connected "))
    .catch(err => console.log(err));
//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

//use css and static
app.use(express.static(__dirname + '/public'));
//connect flash
app.use(flash());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/TEDxManaratAlFaroukSchool',require('./routes/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running on port 5000"));

// uploading images


