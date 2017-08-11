//METHOD 1 


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
 this.first= firstAndLast.split(' ')[0];
   this.last= firstAndLast.split(' ')[1];
  
//   var splitArray = firstAndLast.split(' ');
  
  this.getFirstName = function(){
    return this.first;
};
  
    this.getLastName = function(){
    return this.last;
};
        this.getFullName = function(){
    return this.first + " "+ this.last ;
};
  
 this.setFirstName = function(first){
    this.first = first;
};
  
   this.setLastName = function(last){
    this.last = last;
};

     this.setFullName = function(fullname){
 this.first= fullname.split(' ')[0];
   this.last= fullname.split(' ')[1];
       return  this.first + " "+ this.last ;
     };
  
};
var bob = new Person('Bob Ross');
bob.getFullName();

Object.defineProperty(bob,'first', {
  enumerable:false,
  
});
Object.defineProperty(bob,'last', {
  enumerable:false,
  
});

//METHOD 2


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
 var first= firstAndLast.split(' ')[0];
   var last= firstAndLast.split(' ')[1];
  

  
  this.getFirstName = function(){
    return first;
};
  
    this.getLastName = function(){
    return last;
};
        this.getFullName = function(){
    return first + " "+ last ;
};
  
 this.setFirstName = function(firstn){
    first = firstn;
};
  
   this.setLastName = function(lastn){
    last = lastn;
};

     this.setFullName = function(fullname){
 first= fullname.split(' ')[0];
   last= fullname.split(' ')[1];
       return  first + " "+ last ;
     };
  
};
var bob = new Person('Bob Ross');
bob.getFullName();