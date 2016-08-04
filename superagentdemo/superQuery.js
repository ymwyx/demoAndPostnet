'use strict'
var request=require('superagent');
request
    .get('localhost:3000/s')
    .type('form')
    .query({'q':'123'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });