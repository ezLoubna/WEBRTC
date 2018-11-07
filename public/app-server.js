var express = require('express');
var app = express();
var https = require('https');
https.createServer(options, app).listen(3000);
//app.listen(3000);
app.use(express.static('public'));