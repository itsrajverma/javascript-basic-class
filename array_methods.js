var names = ["Raman","Priya","Preet","Palvinder","Raj","Superman"];

console.log(names);
console.log(names.toString());

console.log(names.join(" / "));

// names.pop();

// console.log(names)

// names.push("Spiderman");

// console.log(names);

// names.shift()

// console.log(names);


// names.unshift("Shinchan")

// console.log(names);


names.splice(2,0,"Doromon","Nobita");

console.log(names)


names.splice(6,2);

console.log(names);

var othername = ["Jiyan","Suzuka"];
var names2 = ["Raj","Superman"];

var allnames= names.concat(othername,names2);

console.log(allnames);

var heros = allnames.splice(4);
console.log(heros)

