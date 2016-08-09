'use strict';
require('dotenv').config();
const uber = require('../server/uber.js');
const lyft = require('../server/lyft.js');
const chai = require('chai');
const should = chai.should();

const dummyCoords = {
  start: {
    lat: '37.7874963',
    lng: '122.39990869999997'
  },
  end: {
    lat: '37.74773',
    lng: '122.374935'
  }
}

describe('Uber', () => {
  it('uberRequest() should return promises', (done) => {
    const promise = uber.uberRequest(dummyCoords);
    (promise.then).should.be.a('function');
    done();
  });
  it('The responses should parse to an object of rides and coords', function(done) {
    uber.uberRequest(dummyCoords).then((data) => {
      const parsed = uber.parseUber(data);
      parsed.should.have.property('rides');
      parsed.should.have.property('coords');
      done();
    })
  })
})

describe('Lyft', () => {
  it('lyftRequest() should return promises', (done) => {
    const promise = lyft.lyftRequest(dummyCoords);
    (promise.then).should.be.a('function');
    done();
  });
  it('The responses should parse to an object of rides and coords', (done) => {
    lyft.lyftRequest(dummyCoords).then((data) => {
      const parsed = lyft.parseLyft(data);
      parsed.should.have.property('rides');
      parsed.should.have.property('coords');
      done();
    })
  })
})
