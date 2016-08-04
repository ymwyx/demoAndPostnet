'use strict'
var request=require('superagent');
let zip = require('./core/zip');
let zipToBar = new zip();
request
    .get('localhost:8000/s')
    .type('form')
    .query({'zipcode':zipToBar.dealZipcode('12345')})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });