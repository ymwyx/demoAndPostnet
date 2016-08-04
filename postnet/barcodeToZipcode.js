'use strict'

let express=require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/s', function (req, res) {
    res.send(req.body.barcode);
});
var server = app.listen(3050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports=app;