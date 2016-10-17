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

// studentGrades(studentData);

function processStudentData(data, passThreshold, meritThreshold){
    // passThreshold = typeof passThreshold !== 'undefined'? passThreshold: 60;
    // meritThreshold = typeof meritThreshold !== 'undefined'? meritThreshold: 75;
    // console.log("passThreshold", passThreshold);

    // Q - how does sdata know that data is what's being passed?
    data.forEach(function(sdata){
      // console.log('sdata outloop', sdata)
      //above returns 'sdata' > Object {name: "Bob", id: 0, scores: Array[4]}


        //reduce() method reduces an array to a single value      
        var av = sdata.scores.reduce(function(prev, current){
            return prev+current;
        },0) / sdata.scores.length;
        sdata.average = av;
        // console.log("sdata", sdata); output is scores per person 
        //[68, 75, 76, 81]
        console.log("sdata.scores", sdata.scores);
        if(av > meritThreshold){
            sdata.assessment = 'passed with merit';
        }
        else if(av > passThreshold){
            sdata.assessment = 'passed';
        }
        else{
            sdata.assessment = 'failed';
        }
        // D
        console.log(sdata.name + "'s (id: " + sdata.id +
          ") final assessment is: " +
            sdata.assessment.toUpperCase());
    });

}

// processStudentData(studentData, 60, 75);

// var cars = ["Saab", "Volvo", "BMW"];
// cars.prototype.function = car(){
//   alert("yo");
// }


// var test = new cars();

var Citizen = function(name, country){
  this.name = name;
  this.country = country;
}


// Citizen.prototype.print_details = function(){
//   console.log("Citizen " + this.name + " from " + this.country)
// }

//above code, when ran with variable/calling function will have
//desired output. Although 'correct' naming of function would be camelcase

Citizen.prototype = {
  printDetails: function(){
    console.log("Citizen " + this.name + ' from ' + this.country);
  }
};
// console.log(typeof(Citizen)) //function

//above code, when ran with variable/calling function will have
//desired output


var usa = new Citizen('sina', 'us');
// usa.printDetails();

var g = new Citizen('Groucho', "USA");
var h = new Citizen('harpo', 'haRPLANDIA');

// g.print_details();
// g.print_details.call(h);


var Citizen2 = {
  setCitizen: function(name, country){
    this.name = name;
    this.country = country;
    return this; //why
    //answer: object chaining
  },
  printDetails: function(){
    console.log('Citizen ' + this.name + ' from ' + this.country);
  }
}

// console.log(typeof(Citizen2)); //object

var Winner = Object.create(Citizen2);
// Winner.setCitizen('Sina', 'US');
// Winner.printDetails();

Winner.setWinner = function(name, country, category, year){
  // this.Citizen2(name, country); //how is it passing paramaters to the class?
  //ps above throws 'Uncaught TypError: this.citizen2 is not a function'
  this.category = category;
  this.year = year;
  return this; 
}

Winner.printDetails = function(){
  console.log("Nobel winner " + this.name + ' from ' +
    this.country + ' , category' + this.category + ' , year' + this.year);
}

var albert = Object.create(Winner).setWinner('Albert', 'Switzerland', 'Physics', '1923');

// albert.printDetails();

//data chaining, used heavily in d3



var sel = d3.select("#viz")
          .attr('width', '600px')
          .attr('height', '400px')
          .style('background', 'lightgray');


names = ['a', 'b', 'c'];

names.forEach(function(element,index){
  console.log(index + ':' + element); //0: a - how are n,i declared with their designation
  // ah, .forEach(element, index, array) - it'd be better convention to name them as such
})




















