google.charts.load('current', {'packages': ['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawColumnChart);

function drawColumnChart() {
  const dataArray = [['City', 'Uber', 'Lyft']];
  const options = {
  //The following values may need to be fine-tuned to your own screen size.
                   'width': 980,
                   'height': 650,
                   'chartArea': {width: '90%', height: '80%'},
                   'colors': ['#575757', '#EA0B8C'],
                   'legend': {position: 'bottom'},
                   'vAxis': {ticks: [{v:0,f:'$0'},
                             {v:1,f:'$1.00'},
                             {v:2,f:'$2.00'},
                             {v:3,f:'$3.00'},
                             {v:4,f:'$4.00'},
                             {v:5,f:'$5.00'},
                             {v:6,f:'$6.00'},
                             {v:7,f:'$7.00'}]
                            }
                  };
  const chart = new google.visualization.ColumnChart(document.getElementById('chart'));

  $.get('/charts/column', (data) => {
    //Data is an object with properties "Lyft" and "Uber", both an array of ride statistics
    for (let obj of data.Uber) {
      dataArray.push([obj.city, +obj.cost]);
    }
    for (let i=1; i<dataArray.length; i++) {
      if (dataArray[i][0] === 'Houston') {
        dataArray[i][2] = 0;  //Lyft doesn't operate in Houston
      }
      for (let obj of data.Lyft) {
        if (obj.city === dataArray[i][0]) {
          dataArray[i][2] = +obj.cost;
        }
      }
    }

    const chartData = google.visualization.arrayToDataTable(dataArray);
    chart.draw(chartData, options);
  })
}

//TODO: this chart under development
function drawGeoChart() {
  const dataArray = [['City', 'Surge Multiplier', 'Surge Count']];
  const options = {
    region: 'US',
    displayMode: 'markers',
    colorAxis: {colors: ['yellow', '#FF0000']}
  };

  $.get('/charts/geo', (data) => {
    for (let obj of data) {
      if (obj.city === 'San Francisco') {
        dataArray.push([obj.city, parseFloat(obj.max),  1875]); //Compensate for excessive surge testing here
      } else if (obj.city === 'Houston') {
        dataArray.push([obj.city, parseFloat(obj.max),  parseInt(obj.count) * 2]);  //compensate for no lyft
      } else {
        dataArray.push([obj.city, parseFloat(obj.max),  parseInt(obj.count)]);
      }
    }
    console.log(dataArray);
    const chartData = google.visualization.arrayToDataTable(dataArray);
    const chart = new google.visualization.GeoChart(document.getElementById('chart'));
    console.log(dataArray);
    chart.draw(chartData, options);
  });
}

//TODO: This chart under development
function drawScatterChart() {
  const dataArray = new google.visualization.DataTable();
  dataArray.addColumn('number', 'Lat');
  dataArray.addColumn('number', 'Lng');
  // dataArray.addColumn('number', 'Price');
  // dataArray.addColumn('number', 'Surge Multiplier');
  const options = {
    region: 'US',
    displayMode: 'markers',
    sizeAxis: { minValue: 5, maxValue: 5 },
    colorAxis: {colors: ['yellow', '#FF0000']}
  };

  $.get('/charts/scatter', (data) => {
    let count = 0;
    for (let obj of data) {
      count++;
      if (count > 50) {break}
      // if (obj.city === 'San Francisco') {
      //   dataArray.push([obj.start_lat, obj.start_lng, parseFloat(obj.max),  1875]) //Compensate for excessive surge testing here
      // } else if (obj.city === 'Houston') {
      //   dataArray.push([obj.city, parseFloat(obj.max),  parseInt(obj.count) * 2])  //compensate for no lyft
      // } else {
        dataArray.addRows([[parseFloat(obj.start_lat), parseFloat(obj.start_lng)]]);//, parseFloat(obj.high_est),  parseFloat(obj.price_multiplier)]]);
      }
    });
    const chart = new google.visualization.GeoChart(document.getElementById('chart'));
    console.log(dataArray);
    chart.draw(dataArray, options);
}
