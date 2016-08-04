'use strict'

var express = require('express');
var app = express();

app.get('/s', function (req, res) {
    res.send(req.query.zipcode);
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports=app;