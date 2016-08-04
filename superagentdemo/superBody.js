'use strict'
var request=require('superagent');
request
    .post('localhost:4000/s')
    .type('form')
    .send({'input':'abc'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
