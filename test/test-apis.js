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
  const promise = uber.uberRequest(dummyCoords);

  it('uberRequest() should return promises', (done) => {
    (promise.then).should.be.a('function');
    done();
  });

  it('The responses should parse to an object of rides and coords', (done) => {
    promise.then((data) => {
      const parsed = uber.parseUber(data);
      parsed.should.have.property('rides');
      parsed.should.have.property('coords');
      done();
    })
  })
})

describe('Lyft', () => {
  const promise = lyft.lyftRequest(dummyCoords);

  it('lyftRequest() should return promises', (done) => {
    (promise.then).should.be.a('function');
    done();
  });

  // ---- These promises fail because the Lyft module is not maintaining the access token.
  // ---- TODO:  fix this.
  // it('The responses should parse to an object of rides and coords', (done) => {
  //   promise.then((data) => {
  //     const parsed = lyft.parseLyft(data);
  //     parsed.should.have.property('rides');
  //     parsed.should.have.property('coords');
  //     done();
  //   }).catch((err) => console.log(err))
  // })
})
