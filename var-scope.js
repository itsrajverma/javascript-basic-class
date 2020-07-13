console.log(x);
var x=5;
console.log(x);


// console.log(y);
// let y = 15;
// console.log(y)

function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar);
  
    {
      let baz = "Bazz";
      console.log(baz);
    }
  
    console.log(baz); // ReferenceError
  }
  
  run();