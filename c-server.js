var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');
var sslOptions = {
	key: fs.readFileSync('D:/OpenSSL-Win32/keys/private.key'),
	cert: fs.readFileSync('D:/OpenSSL-Win32/keys/certificat.crt'),
	passphrase: 'mohamed',
};
https.createServer(sslOptions, app).listen(3000);
//app.listen(3000);
app.use(express.static('public'));