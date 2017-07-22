var http=require('http');
var express= require('express');
var path = require('path');
var app = express();
var port = process.env.port || 1337;
app.use(express.static(path.join(__dirname, 'www')));
//app.use(express.static(path.join(__dirname,  '../bower_components')));
//app.use(express.static(path.join(__dirname,  '../custom')));
app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname,  '../bower_components')));
app.get('/', function(req, res){

    res.render('Index.html');

});

app.get('/hello', function(req, res){

    res.send("hello ram");

});
http.createServer(app).listen(port, function () {
	console.log('Server is running. Point your browser to: http://localhost:' + port);
});// open web server
