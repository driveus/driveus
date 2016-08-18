//TODO: Checkbox to subdivide into uber and lyft


google.charts.load('current', {'packages': ['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
  const dataArray = [['City', 'Uber', 'Lyft']]
  const options = {'title': 'Price per mile of Lyft and Uber',
                   'width': 1300,
                   'height': 850,
                   'colors': ['#575757', '#EA0B8C'],
                  //  'legend': {position: 'none'},
                   'vAxis': {ticks: [{v:0,f:'$0'},{v:1,f:'$1.00'},{v:2,f:'$2.00'},{v:3,f:'$3.00'},{v:4,f:'$4.00'},{v:5,f:'$5.00'},{v:6,f:'$6.00'},{v:7,f:'$7.00'}]}
                  };
  const chart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));

  $.get('/charts/bar', (data) => {
    for (let obj of data.Uber) {
      dataArray.push([obj.city, +obj.cost]);
    }
    for (let i=1; i<dataArray.length; i++) {
      if (dataArray[i][0] === 'Houston') {
        dataArray[i][2] = 0;  //Lyft doesn't operate in Houston
      }
      for (let obj of data.Lyft) {
        console.log(obj.city, dataArray[i][0])
        if (obj.city === dataArray[i][0]) {
          dataArray[i][2] = +obj.cost;
        }
      }
    }
    console.log(dataArray);
    const chartData = google.visualization.arrayToDataTable(dataArray);
    chart.draw(chartData, options);
  })
}

function drawGeoChart() {
  const dataArray = [['City', 'Surge Count', 'Surge Multiplier']];
  const options = {
    region: 'USA',
    displayMode: 'markers',
    colorAxis: {colors: ['green', 'red']}
  };

  $.get('/charts/geo', (data) => {
    for (let obj of data) {
      dataArray.push([obj.city, obj.count, obj.max])
    }
    console.log(dataArray);
    const chartData = google.visualization.arrayToDataTable(dataArray);
    const chart = new google.visualization.GeoChart(document.getElementById('bar-chart'));
    chart.draw(chartData, options);
  });
}
