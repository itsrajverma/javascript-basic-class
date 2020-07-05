var person  = {
    first_name : "John",
    last_name  : "Deo",
    email  : "johndeo@gmail.com",
    age : 20,
    fullname : function(){
       return this.first_name + ' ' + this.last_name;     
    }
 }

 console.log(person.first_name);
 console.log(person.fullname());