const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

const http = require('http').createServer(app);
const port = 8080;

http.listen(port, function (err) {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at http://localhost:${port}`);
});
