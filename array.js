var names = ["Rohan","Jmaes","Superman","Rock"];

console.log(names[0]);

var cars = new Array("BMW","AUDI","HUNDAI");

console.log(cars[0]);

cars[1]="SKODA";

console.log(cars)

console.log(cars.length)

console.log(cars.sort());

console.log(names[names.length - 1]);

names.forEach(name => {
    console.log(name);
});


// ["a","b","c","d","e"] 
console.log("Using for loop")
for(var i=0;i < names.length; i++){
    console.log(names[i]);
}


cars.push("FARRARI");

console.log(cars)


cars[cars.length]="AUDI";


console.log(cars);

delete cars[3];

console.log(cars);
