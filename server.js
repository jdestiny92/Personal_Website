var express = require('express');
var app = express();
app.use(express.static('public'));
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('view engine', 'handlebars');

var port = 3000;

app.listen(port);