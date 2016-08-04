'use strict'

var should = require('should');
var request=require('supertest');
let app=require('../postnet/barcodeToZipcode');
let bar = require('../postnet/core/bar');
let barToZip = new bar();

describe('app',function () {
    it('app',function (done) {
        request(app)
            .post('/s')
            .send({'barcode':barToZip.dealBarcode('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |')})
            .end(function (err, res) {
                res.text.should.equal('12345');
                done(err);
            });
    })
})