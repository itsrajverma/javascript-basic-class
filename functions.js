function sayHello(){
    /// logic 
    console.log("Hello World");
}

sayHello();


function addition(num1,num2){
    console.log(num1 + num2);
    return num1 + num2;
}

var sum = addition(2,4);

console.log('Sum is ' + sum);

function greeting(name='Raj'){
    console.log(`Hey ${name}, How are you.`);
}

greeting("Raman");