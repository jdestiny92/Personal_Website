var express = require('express');
var nodemailer = require('nodemailer');
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

app.post('/mail', function(req, res){
	//console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'theicyreview@gmail.com', // Your email id
            pass: 'kcdnsyuwwrzllpvl' // Your password
        }
    });

    var mailOptions = {
    from: 'theicyreview@gmail.com', // sender address
    to: 'jbiebelberg@gmail.com', // list of receivers
    subject: 'Email From Website', // Subject line
    text: (message + "\r\n" + ' Contact email address is: ' + email + "\r\n" + 'Message sent from: ' + name) 
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        //console.log(error);
        res.json({yo: 'error'});
    }
    else{
        //console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});

	//res.json(req.body);
})

var port = process.env.PORT || 3000;

app.listen(port);