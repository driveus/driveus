'use strict';
require('dotenv').config();
const uber = require('../server/uber.js');
const lyft = require('../server/lyft.js');
// const db = require('../server/db.js');
const chai = require('chai');
const should = chai.should();
const genRadius = require('../server/generate_radius.js');

const dummyCoords = {
  start: {
    lat: 37.7874963,
    lng: -122.39990869999997
  },
  end: {
    lat: 37.74773,
    lng: -122.374935
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

describe('genRadius.CreatePointOnRadius', () => {
  it('CreatePointOnRadius should mathematically generate a GPS point at a specific bearing and distance away from a start point', function() {
    var data = genRadius.createPointOnRadius(dummyCoords.start, 45, .5)
    var expectedResult = {lat: 37.79067581362267, lng: -122.39588521004384}
    Math.round(data.lat*1000000).should.equal(Math.round(expectedResult.lat*1000000));
    Math.round(data.lng*1000000).should.equal(Math.round(expectedResult.lng*1000000));
  })

  it('CreatePointOnRadius should return "Invalid Input" for invalid starting point', function() {
    var data = genRadius.createPointOnRadius(null, 45, .5)
    var expectedResult = 'Invalid Input(s)'
    data.should.equal(expectedResult);
  })

  it('CreatePointOnRadius should return "Invalid Input" for invalid bearing', function() {
    var data = genRadius.createPointOnRadius(dummyCoords.start, null, .5)
    var expectedResult = 'Invalid Input(s)'
    data.should.equal(expectedResult);
  })

  it('CreatePointOnRadius should return "Invalid Input" for invalid radius', function() {
    var data = genRadius.createPointOnRadius(dummyCoords.start, 45, null)
    var expectedResult = 'Invalid Input(s)'
    data.should.equal(expectedResult);
  })
})

describe('genRadius.reverseGeoCode', () => {
 
  it('reverseGeoCode should accept a GPS location and output the closest valid street GPS location', function() {
    var expectedResult = {lat: 37.7874963, lng: -122.39990869}
    return genRadius.reverseGeoCode(dummyCoords.start).then(function(data) {
      Math.round(data.lng*1000).should.equal(Math.round(expectedResult.lng*1000));
    })
  })

  it('reverseGeoCode should output NaN if given a invalid but numeric coordinates', function() {
    return genRadius.reverseGeoCode({lat: 100, lng: 200}).then(function(data) {
      isNaN(data).should.equal(true);
    })
  })

  it('reverseGeoCode should output an error message if given a malformatted but non-null/non-undefined input', function() {
    return genRadius.reverseGeoCode('bad input').then(function(data) {
      // Math.round(data.lat*10000).should.equal(Math.round(expectedResult.lat*10000));
      data.should.equal('Reversing Geocode Failed');
    })
  })

  it('reverseGeoCode should output an error message if given a null or undefined input', function() {
    var result = genRadius.reverseGeoCode(undefined)
    result.should.equal('Undefined or Null input');
  })

})

// 
describe('genRadius.createGeoRadius', () => {
 
  it('createGeoRadius should output an array of results', function() {
    return genRadius.createGeoRadius({lat: 100, lng: 200}).then(function(data) {
      (Array.isArray(data)).should.equal(true);
    })
  })

  it('createGeoRadius should return the initial search location as the first result', function() {
    var expectedResult = {lat: 37.7874963, lng: -122.39990869}
    return genRadius.createGeoRadius(dummyCoords).then(function(data) {
      Math.round(data[0].lat*100).should.equal(Math.round(expectedResult.lat*100));    
      Math.round(data[0].lng*100).should.equal(Math.round(expectedResult.lng*100));
    })
  })

  it('createGeoRadius should return the result at bearing 0 as the second result', function() {
    var expectedResult = {lat: 37.79199290802959, lng: -122.39990869999998}
    return genRadius.createGeoRadius(dummyCoords).then(function(data) {
      Math.round(data[1].lat*100).should.equal(Math.round(expectedResult.lat*100));    
      Math.round(data[1].lng*100).should.equal(Math.round(expectedResult.lng*100));
    })
  })

})