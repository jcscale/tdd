var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + '/static'));

app.set('view engine', 'ejs');

app.use('/', require('./routes'))

app.listen(8000, function() {
    console.log("Listening on port 8000");
});