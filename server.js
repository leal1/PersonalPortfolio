var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
	app.use(express.static(path.join(__dirname, 'public')));;
})
app.get('/hello', function(req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"));
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at https://%s:%s", host, port)

})