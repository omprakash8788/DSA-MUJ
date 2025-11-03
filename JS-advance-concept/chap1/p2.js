
// Prototype 

function Person(name){
    this.name = name;

}
Person.prototype.getName= function(){
    return this.name;
};
var alice = new Person("OP");
console.log(alice, alice.getName())