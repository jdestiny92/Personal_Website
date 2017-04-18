var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get('/', function(req, res){
	res.render('index');
})

app.post('/mail', function(req, res){
	
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
        text: (message + "\r\n" + "\r\n" + ' Contact email address is: ' + email + "\r\n" + "\r\n" + 'Message sent from: ' + name) 
    };


transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.json({message: 'error'});
    }
    else{
       
        res.json({message: 'message sent successfully!'});
    };
});

	
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Listening on port: ' + port);
});