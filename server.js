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

app.get('/', function(req, res){
	res.render('index');
})

app.get('/portfolio', function(req, res){
	res.render('portfolio');
})

app.get('/contact', function(req, res){
	res.render('contact');
})

app.get('/testomonial', function(req, res){
	res.render('testomonial');
})

var port = 3000;

app.listen(port);