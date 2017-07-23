var http=require('http');
var express= require('express');
var path = require('path');
var app = express();

var port = process.env.port || 1337;
app.use(express.static(path.join(__dirname, 'views')));
//app.use(express.static(path.join(__dirname,  '../bower_components')));
//app.use(express.static(path.join(__dirname,  '../custom')));
//app.use(express.static(path.join(__dirname , "public")));
app.use('/lib',express.static(path.join(__dirname, '/public')));
app.use('/assests',express.static(path.join(__dirname, '/bower_components')));
app.use('/npm',express.static(path.join(__dirname, '/node_modules')));
var employee = require('./public/js/employee');



//app.set("view engine", "vash");
 //app.set('view engine', 'html');
//app.use(express.static(path.join(__dirname,  '../bower_components')));
app.get('/', function(req, res){
    
    res.render('Index.html');

});

app.get('/api/members', function(req, res){

//res.send("hello ram");
res.json({"TeamMembers": employee.GetMembersList()});
});
http.createServer(app).listen(port, function () {
	console.log('Server is running. Point your browser to: http://localhost:' + port);
});// open web server
