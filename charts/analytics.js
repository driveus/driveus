//select extract(dow from time) from uberhist;
//remember to account for time zone


//remember to throw out junk data: lyft rides over $204,
//rides shorter than .5mi, rides longer than 20 mi

//Make a Map view with points scaled by surge multiplier
//Sliders for time of day and for day of week

//Make a map of city comparison, with a checkbox
//to split uber vs. lyft by city
//SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type IN ('UberX', 'UberPOOL', 'Lyft', 'Lyft Line') GROUP BY city;
//TODO: Checkbox to subdivide into uber and lyft


google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
