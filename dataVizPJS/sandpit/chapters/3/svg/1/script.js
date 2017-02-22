// (function(){ console.log('yod'); }());

  //  function getMousePos(e) {
  //      return {x:e.clientX,y:e.clientY};
  //  }

  //  document.onmousemove=function(e) {
  //      var mousecoords = getMousePos(e);
  //      console.log("x coordinates", mousecoords.x);
  //      console.log("y coordinates", mousecoords.y);
  // };

  // 

  var chartCircles = function(data){
    var chart = d3.select("#chart");

    //set the chart height and width from data
    chart.attr('height', data.height).attr('width', data.width);
    var a = chart.attr('height', data.height);
    console.log(a)
    //create some circles using data
    chart.selectAll('circle').data(data.circles)
      .enter()
      .append('circle')
      .attr('cx', function(d){return d.x})
      .attr('cy', function(d){return d.y})
      .attr('r', function(d){return d.r});
  };

  var data = {
    width: 300, height:150,
    circles: [
      {'x':50, 'y':30, 'r':20},
      {'x': 70, 'y': 80, 'r': 10},
      {'x': 160, 'y': 60, 'r': 10},
      {'x': 200, 'y': 100, 'r': 5},
    ]
  };

  chartCircles(data);

  // console.log('test');