// // script.js
// var data = [3, 7, 2, 9, 1, 11];
// var total = 0;
// var sum = data.forEach(function(d){
//     alert(d);
//     total += d;
// });
// sum = total;

// console.log('Sum = ' + sum);
// // outputs 'Sum = 33'

//below is example of use strict
//Q - passing an argument to iffy.. look into this
// (function(foo){
//   'use strict';


// }(window.foo = window.foo || {});


var studentData = [
    {'name': 'Bob', id:0, 'scores':[68, 75, 76, 81]},
    {'name': 'Alice', id:1, 'scores':[75, 90, 64, 88]},
    {'name': 'Carol', id:2, 'scores':[59, 74, 71, 68]},
    {'name': 'Dan', id:3, 'scores':[64, 58, 53, 62]},
];

//passThreshold, meritThreshold

function studentGrades(data, passThreshold = 60, meritThreshold=75){
  
  for (var i = 0; i < studentData.length; i++){
    sum = 0;
    name = data[i]['name'];
    console.log()
    scores = studentData[i]['scores'];
    for (var j = 0; j<scores.length; j++){
      sum += scores[j];

    }
    length = scores.length;
    avg = (sum/length);
    if(avg > meritThreshold){
      console.log(name, "passed with merit");
    } else if(avg > passThreshold){
      console.log(name, "passed");
    }
    else{
      console.log(name, "failed");
    }
  }
}

studentGrades(studentData);
















