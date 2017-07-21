var http=require('http');
var express= require('express');
var path = require('path');
var app = express();
var port = process.env.port || 1337;
app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function(req, res){

    res.sendFile(path.join(__dirname + '/www/Index.html'));

});

http.createServer(app).listen(port, function () {
	console.log('Server is running. Point your browser to: http://localhost:' + port);
});// open web server here
