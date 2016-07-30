import { FETCH_ROUTES } from '../actions/types';

export default function(state=[[],[]], action) {
  // Link up API call to populate list with real data
  switch (action.type) {
    case FETCH_ROUTES:
    // Need to wipe old route state? Cache?
      return [[],[]];
  }
  // default return, still dummy data
  return [
    [{
      "product_id": "26546650-e557-4a7b-86e7-6a3942445247",
      "currency": "USD",
      "display_name": "POOL",
      "estimate": "$7",
      "low_estimate": 7,
      "high_estimate": 7,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34,
    },
    {
      "product_id": "08f17084-23fd-4103-aa3e-9b660223934b",
      "currency": "USD",
      "display_name": "UberBLACK",
      "estimate": "$23-29",
      "low_estimate": 23,
      "high_estimate": 29,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "9af0174c-8939-4ef6-8e91-1a43a0e7c6f6",
      "currency": "USD",
      "display_name": "UberSUV",
      "estimate": "$36-44",
      "low_estimate": 36,
      "high_estimate": 44,
      "surge_multiplier": 1.25,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "aca52cea-9701-4903-9f34-9a2395253acb",
      "currency": null,
      "display_name": "uberTAXI",
      "estimate": "Metered",
      "low_estimase": null,
      "high_estimate": null,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    },
    {
      "product_id": "a27a867a-35f4-4253-8d04-61ae80a40df5",
      "currency": "USD",
      "display_name": "uberX",
      "estimate": "$15",
      "low_estimase": 15,
      "high_estimate": 15,
      "surge_multiplier": 1,
      "duration": 640,
      "distance": 5.34
    }
  ],
  [{
    "ride_type": "lyft_plus",
    "duration": 913,
    "distance": 3.29,
    "high_estimate": 2355,
    "primetime_percentage": "25%",
    "currency": "USD",
    "low_estimate": 1561,
    "display_name": "Lyft Plus",
    "primetime_confirmation_token": null
  },
  {
    "ride_type": "lyft_line",
    "duration": 913,
    "distance": 3.29,
    "high_estimate": 475,
    "primetime_percentage": "0%",
    "currency": "USD",
    "low_estimate": 475,
    "display_name": "Lyft Line",
    "primetime_confirmation_token": null
  },
  {
    "ride_type": "lyft",
    "duration": 913,
    "distance": 3.29,
    "high_estimate": 1755,
    "primetime_percentage": "25%",
    "currency": "USD",
    "low_estimate": 1052,
    "display_name": "Lyft",
    "primetime_confirmation_token": null
  }]
];
}
