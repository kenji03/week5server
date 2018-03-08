// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();

var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

console.log("Calling httpsServer");

httpsServer.listen(4443, "192.168.128.82",function(){
	console.log("Calling httpsServer's callback function");
	var host = httpsServer.address().address;
	var port = httpsServer.address().port;
	console.log('running at https://'+host+':'+port);
});

console.log("httpsServer executed.");
console.log("your direct path:"+__dirname);

// app.get(PATH, FUNC) path is a part of URL that leads to your res.send
app.get('/:fileName', function (req, res) {
	// run some server-side code
	var fileName = req.params.fileName;
	console.log(fileName + 'requested');
	// note that__dirname gives the path to the server.js file
	res.sendFile(__dirname+'/'+fileName);
});
