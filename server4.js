// express is the server that forms part of the nodejs program
// call the express by require 
var express = require('express');
var app = express();

// serve static files to be able to serve any html files that the user requests
// this is middleware which is allows you to define a stack of actions that you should 
// flow through. Express serves themselves are a stack of middlewares
app.use('/', express.static(__dirname));

// set the preliminary for https
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
// build the server 
var httpsServer = https.createServer(credentials, app);

console.log("Calling httpsServer");

// start the server 
httpsServer.listen(4443, "192.168.128.82",function(){
	console.log("Calling httpsServer's callback function");
	var host = httpsServer.address().address;
	var port = httpsServer.address().port;
	console.log('running at https://'+host+':'+port);
});

console.log("httpsServer executed.");
console.log("your current direct path:"+__dirname);

