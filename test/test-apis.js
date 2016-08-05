'use strict';
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
    uber.uberRequest(dummyCoords)
    .then(done());
  });
  it('The responses should parse to an object of rides and coords', function(done) {
    this.timeout(50000)
    uber.uberRequest(dummyCoords).then((data) => {
      rides = uber.parseUber(data);
      rides.should.have.property('rides');
      rides.should.have.property('coords');
      done();
    })
  })
})

describe('Lyft', () => {
  it('lyftRequest() should return promises', (done) => {
    const promises = lyft.lyftRequest(dummyCoords)
    .then(done());
  });
})
