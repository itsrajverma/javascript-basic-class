var names = ["Raman","Priya","Preet","Palvinder","Raj","Superman"];
console.log(names.sort());

console.log(names.reverse());


var numbers = [12,45,6,40,32,29,68,76];

console.log(numbers.sort(function(a,b){ return a - b }))

console.log(numbers.sort(function(a,b){ return b - a }))
