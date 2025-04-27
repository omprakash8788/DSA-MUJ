/*
Simple way 


JavaScript me Stack kaise banate hain?
Stack ko hum array ke through easily bana sakte hain, kyunki array me push() aur pop() methods hote hain.

push(element) => naya element stack ke top pe daalta hai.

pop() => top se element nikaalta hai.

Chalo ek simple example banate hain:




*/

// Stack banana array se
// let stack = [];

// // Push karte hain
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack); // [10, 20, 30]

// // Pop karte hain
// let poppedElement = stack.pop();
// console.log(poppedElement); // 30
// console.log(stack); // [10, 20]



// Professional way
// Thoda aur professional tarike se Stack banane ka tareeka (class bana ke):

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Stack ka use
  let stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(15);
  stack.print(); // 5,10,15
  console.log(stack.pop()); // 15
  stack.print(); // 5,10
  console.log(stack.peek()); // 10
  
