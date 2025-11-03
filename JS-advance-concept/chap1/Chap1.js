// CHAPTER 1
// PROTOTYPAL INHERITANCE AND OBJECT CREATION
// PATTERNS


const baseProto={
    greet(){
        return `Hello from base`
    }
};
const derivedObj= Object.create(baseProto);
console.log(derivedObj.greet()); //  Hello from base