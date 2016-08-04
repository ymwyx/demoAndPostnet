'use strict'
var request=require('superagent');
request
    .get('localhost:5000/s/tj')
    .type('form')
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
