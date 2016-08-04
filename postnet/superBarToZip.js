/**
 * Created by yinmeng on 16-8-3.
 */
'use strict'
let zip = require('./core/bar')
let zipcode = new zip();
var request=require('superagent');
request
    .post('localhost:3050/s')
    .type('form')
    .send({barcode:zipcode.dealBarcode('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |')})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
