const nyc =      {latRange: [40.832515, 40.698],
                  lngRange: [-74.000645, -73.87]};
const sf =       {latRange: [37.77801, 37.719],
                  lngRange: [-122.5044, -122.38048]};
const portland = {latRange: [45.5667, 45.48156],
                  lngRange: [-122.7135, -122.5583]};
const denver =   {latRange: [39.79957, 39.6797],
                  lngRange: [-105.086288, -104.85077]};
const houston =  {latRange: [29.8597, 29.6618],
                  lngRange: [-95.5591, -95.232224]};
const dallas =   {latRange: [32.8225, 32.7457],
                  lngRange: [-96.8699, -96.758995]};
const chicago =  {latRange: [41.958469, 41.7],
                  lngRange: [-87.797241, -87.539]};
const la =       {latRange: [34.089, 33.97867],
                  lngRange: [-118.3653, -118.19778]};
const miami =    {latRange: [25.8209, 25.7],
                  lngRange: [-80.23152, -80.209]};
const seattle =  {latRange: [47.7, 47.51697],
                  lngRange: [-122.38632, -122.260323]};
const vegas =    {latRange: [36.16546, 36.126783],
                  lngRange: [-115.19234, -115.12831]};

const cities = {
                'New York City': nyc,
                'San Francisco': sf,
                Portland: portland,
                Denver: denver,
                Houston: houston,
                Dallas: dallas,
                Chicago: chicago,
                'Los Angeles': la,
                Miami: miami,
                Seattle: seattle,
                'Las Vegas': vegas
              }
module.exports.cities = cities;
