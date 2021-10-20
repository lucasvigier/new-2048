import express from 'express';
var app = express();
var server = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'client/index.html');
});
app.use('/client', static(__dirname + '/client'));

server.listen(2000);