// script.js
var data = [3, 7, 2, 9, 1, 11];
var total = 0;
var sum = data.forEach(function(d){
    alert(d);
    total += d;
});
sum = total;

console.log('Sum = ' + sum);
// outputs 'Sum = 33'
