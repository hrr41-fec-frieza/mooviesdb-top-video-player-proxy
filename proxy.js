var proxy = require('express-http-proxy');
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/client/src'));

app.use('/:id', express.static(__dirname + '/client/src'));


app.listen(8000, () => {console.log('Proxy running on port 8000!')})