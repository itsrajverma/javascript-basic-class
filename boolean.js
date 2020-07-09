var a = 5;
var b = '5';
var c = 10;
if(a === b){
    console.log("OK ")
}else{
    console.log("NA")
}

if( a !== b){
    console.log("OK ")
}else{
    console.log("NA")
}

if (a == b && c > a ){
    console.log("condition pass")
}else{
    console.log("condition fail")
}

if(a === b || c > a){
    console.log("condition pass again")
}
var d = 8;

// ternary operator
var check = c > d ? "c is greater then d" : "d is greate then c";
console.log(check);


