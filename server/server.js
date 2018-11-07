//var PeerServer = require('peer').PeerServer;
//var server = PeerServer({port: 9090, path: '/peerjs'});
var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 9000,
  path: '/peerjs',
  ssl: {
    key: fs.readFileSync('D:/OpenSSL-Win32/keys/private.key'),
    cert: fs.readFileSync('D:/OpenSSL-Win32/keys/certificat.crt'),
    passphrase: 'mohamed',
  }
});