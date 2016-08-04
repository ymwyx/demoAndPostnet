'use strict'
var request=require('superagent');
request
    .post('localhost:7000/s')
    .type('form')
    .header({'abc':'a'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
