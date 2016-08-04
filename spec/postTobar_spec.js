'use strict'

var should = require('should');
var request=require('supertest');
let app=require('../postnet/postcodeToBarcode');
let zip = require('../postnet/core/zip');
let zipToBar = new zip();

describe('app',function () {
    it('app',function (done) {
        request(app)
            .get('/s')
            .query({'zipcode':zipToBar.dealZipcode('12345')})
            .end(function (err, res) {
                 res.text.should.equal('|:::||::|:|::||::|::|:|:|::|:|:|');
                done(err);
            });
    })
})
