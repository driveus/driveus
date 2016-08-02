var lyft = require('./lyft.js');
var uber = require('./uber.js');


module.exports = function(app) {
    //TODO:get coors from req
  app.all('/api/uber', function(req, res) {
    console.log('uber hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    uber.uberRequest(coords, res);
  })

  app.all('/api/lyft', function(req, res) {
    console.log(req.body.data)
    //TODO:get coords from req
    console.log('lyft hit: ', req.body.data)
    let coords;
    if (req.body) {
      coords = req.body.data;
    }
    //This function sends the response
    lyft.lyftRequest(coords, res);
  })
};


// const lyftDummyData = [{
//     "ride_type": "lyft_plus",
//     "duration": 913,
//     "distance": 3.29,
//     "high_estimate": 2355,
//     "primetime_percentage": "25%",
//     "currency": "USD",
//     "low_estimate": 1561,
//     "display_name": "Lyft Plus",
//     "primetime_confirmation_token": null
//   },
//   {
//     "ride_type": "lyft_line",
//     "duration": 913,
//     "distance": 3.29,
//     "high_estimate": 475,
//     "primetime_percentage": "0%",
//     "currency": "USD",
//     "low_estimate": 475,
//     "display_name": "Lyft Line",
//     "primetime_confirmation_token": null
//   },
//   {
//     "ride_type": "lyft",
//     "duration": 913,
//     "distance": 3.29,
//     "high_estimate": 1755,
//     "primetime_percentage": "25%",
//     "currency": "USD",
//     "low_estimate": 1052,
//     "display_name": "Lyft",
//     "primetime_confirmation_token": null
//   }];
