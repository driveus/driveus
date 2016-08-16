//select extract(dow from time) from uberhist;
//remember to account for time zone


//remember to throw out junk data: lyft rides over $204,
//rides shorter than .5mi, rides longer than 20 mi

//Make a Map view with points scaled by surge multiplier
//Sliders for time of day and for day of week

//Make a map of city comparison, with a checkbox
//to split uber vs. lyft by city
//SELECT city, AVG((high_est / distance_miles)) AS cost FROM rideshist WHERE ride_type IN ('UberX', 'UberPOOL', 'Lyft', 'Lyft Line') GROUP BY city;
//TODO: PUT CUSTOM TICK MARKS WITH DOLLAR SIGNS
//TODO: Checkbox to subdivide into uber and lyft

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'City');
  data.addColumn('number', 'Price per mile');

  data.addRows([
    ['Houston', 1.7527267886272746],
    ['San Francisco', 4.22872877952395150244],
    ['Portland', 3.6316271848082728],
    ['Denver', 2.13798441842375799495],
    ['Seattle', 3.0767780242665496],
    ['Miami', 2.94144399987047928272],
    ['New York City', 4.5166856803573268],
    ['Dallas', 2.7295749804780952],
    ['Chicago', 2.06208669887057319169],
    ['Los Angeles', 2.21742269972944379616],
    ['Las Vegas', 5.1084135592326243],
  ]);
  console.log("added rows");

  const options = {'title': 'Price per mile of Lyft and Uber',
                   'width': 1100,
                   'height': 600,
                   'legend': {position: 'none'}
                  };

  const chart = new google.visualization.BarChart(document.getElementById('bar-chart'));
  chart.draw(data, options);
}
