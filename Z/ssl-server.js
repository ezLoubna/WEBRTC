//var PeerServer = require('peer').PeerServer;
//var server = PeerServer({port: 9090, path: '/peerjs'});





var express = require('express');
var fs = require('fs');
var app = express(
	{
  //port: 9000,
 // path: '/peerjs',
  ssl: {
    key: fs.readFileSync('D:/OpenSSL-Win32/keys/private.key'),
    cert: fs.readFileSync('D:/OpenSSL-Win32/keys/certificat.crt'),
    passphrase: 'mohamed',
  }
}
	);

app.listen(3000);
app.use(express.static('public'));







// var fs = require('fs');
// var PeerServer = require('peer').PeerServer;

// var server = PeerServer({
//   port: 9000,
//   path: '/peerjs',
//   ssl: {
//     key: fs.readFileSync('D:/OpenSSL-Win32/keys/private.key'),
//     cert: fs.readFileSync('D:/OpenSSL-Win32/keys/certificat.crt'),
//     passphrase: 'mohamed',
//   }
// });