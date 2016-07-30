
//Whereas enzyme and mocha takes care of actual testing

//Things to be careful of: 
  //The loaders -- npm install null-loader otherwise Karma would keep looking for JSON to run the code
  //Including plugins is important!
  //As we start adding more testing files, lines 15 and 18 would change to 'tests.webpack.js'
  //which basically loops through the test folder and tests each file with the extension -- ...test.js
var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    singleRun: true,
    frameworks: [ 'mocha'],
    files: [
      './spec/test-test.js'
    ],
    preprocessors: {
      './spec/test-test.js': [ 'webpack' ]
    },
    // reporters: [ 'dots' ],
    webpack: {
      module: {
        devtool: 'inline-source-map',
        loaders: [
          {
            test: /\.jsx?$/,
            loaders: ['babel']
          },
          {
            test: /\.json$/,
            loaders: ['null-loader']
          }
        ]
      }
    },
    //this makes sure we don't get a million console logs generated by webpack on initialization
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    //watches for changes in the code
    //haven't tested this feature yet
    autoWatch: true
  });
}