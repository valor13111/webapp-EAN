var express = require('express');
var path = require('path');

var index = require('./routes/index');

var app = express();

// view engine setup
// ejs is closest to html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// allows use of static files, now we can call anything from public or views
// without needing the public or views first
// e.g. when calling css file, use /stylesheets/filename.css instead of
// public/stylesheets/filename.css
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;
