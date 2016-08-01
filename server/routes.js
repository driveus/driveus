var lyft = require('./lyft.js');
require('./uber.js');


module.exports = function(app) {
  app.all('/api/uber', function(req, res) {
    res.json(uberDummyData);
  })

  app.all('/api/lyft', function(req, res) {
    //TODO:get coors from req
    let coords;
    if (req.body) {
      coords = req.body.coords
    }
    //This function sends the response
    lyft.lyftRequest(coords, res);
  })
};

const uberDummyData = [{
      "product_id": "26546650-e557-4a7b-86e7-6a3942445247",
      "currency": "USD",
      "display_name": "UberPOOL",
      "estimate": "$7",
      "low_estimate": 700,
      "high_estimate": 700,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34,
    },
    {
      "product_id": "08f17084-23fd-4103-aa3e-9b660223934b",
      "currency": "USD",
      "display_name": "UberBLACK",
      "estimate": "$23-29",
      "low_estimate": 2300,
      "high_estimate": 2900,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "9af0174c-8939-4ef6-8e91-1a43a0e7c6f6",
      "currency": "USD",
      "display_name": "UberSUV",
      "estimate": "$36-44",
      "low_estimate": 3600,
      "high_estimate": 4400,
      "surge_multiplier": 1.25,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "aca52cea-9701-4903-9f34-9a2395253acb",
      "currency": null,
      "display_name": "UberTAXI",
      "estimate": "Metered",
      "low_estimate": null,
      "high_estimate": null,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "a27a867a-35f4-4253-8d04-61ae80a40df5",
      "currency": "USD",
      "display_name": "UberX",
      "estimate": "$15",
      "low_estimate": 1500,
      "high_estimate": 1500,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    }
  ];
  
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