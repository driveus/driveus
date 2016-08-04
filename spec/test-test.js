import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { Provider } from 'react-redux';
import Test from "../src/js/containers/routeLists.jsx";
import App from "../src/js/components/app.jsx";
import MapView from '../src/js/containers/mapView.jsx';
import RoutesLists from '../src/js/containers/routeLists.jsx';
import Route from '../src/js/components/route.jsx';

// const middlewares = [ thunk ]
// const mockStore = configureMockStore();
// var store;
describe('Testing', function() {
  // beforeEach(function() {
  //   var initialState = {
  //     routes: null,
  //     activeRoute: null,
  //     currentLocation: null,
  //     routeMarkers: null,
  //     requestRoute: null
  //   }

  //   store = mockStore(initialState);
  // })

  // describe('First test please work?', function () {
  //   it('should do something', function() {
  //     const wrapper = shallow(<App />);
  //     expect(wrapper).toExist();
  //   })
  // })

  // describe('Google should work', function() {
  //   it('should provide a map', function() {
  //     const mapViewWrapper = shallow(<Provider><MapView /></Provider>);
  //     expect(mapViewWrapper).toExist();
  //   })

  //   // it('should provide a map', function() {
  //   //   const mapViewWrapper = shallow(<Provider store={store}><MapView /></Provider>);
  //   //   console.log('the props are~~~~~~', Object.keys(mapViewWrapper.props()))
  //   //   // expect(mapViewWrapper.props).toExist();
  //   // })
  // })

})
// describe('Children should contain passed properties of Parents', function() {
//   it('should contain the method selectRoute', function() {
//     const routeWrapper = shallow(<Route />);
//     const routeListsWrapper = shallow(<RouteLists />);
//     expect(wrapper.props().selectRoute).to.be.defined;
//   })
//   it('should contain a method that equals the parent method', function() {
//     const routeWrapper = shallow(<Route />);
//     const routeListsWrapper = shallow(<RouteLists />);
//     expect(routeWrapper.props().selectRoute).toEqual(routeListsWrapper.props().selectRoute);
//   })
// })

// describe('It should manage API requests', function() {
//   // it('should contact Google for lat/lng', function() {
//   //  const getCoords = actions.getCoords;
//   //  const address = "4011 Wesley Drive, Little Rock, AR, United States"
//     // expect(getCoords(address).toEqual)
//   })
// })

