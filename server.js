var express = require('express');

//
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);		
	}else{
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express server is up on port' + PORT);
});


/*var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', express.static('public'))
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})*/