/*
Implement Stack using Array

Implement a stack using an array as the underlying container.

The Stack class should support the following methods:

int size()
boolean isEmpty()
int top()
void push(int element)
void pop()
Main method:
Stack created of size 10
Printed: stack.top() stack.isEmpty() stack.size()
Pushed: 5
Printed: stack.top() stack.isEmpty() stack.size()
Pushed: 6
Printed: stack.top() stack.isEmpty() stack.size()
Pushed: 7
Printed: stack.top() stack.isEmpty() stack.size()
Popped
Printed: stack.top() stack.isEmpty() stack.size()
Popped
Printed: stack.top() stack.isEmpty() stack.size()
Popped
Printed: stack.top() stack.isEmpty() stack.size()
Expected Output
-1 true 0
5 false 1
6 false 2
7 false 3
6 false 2
5 false 1
-1 true 0
*/


class Stack {
    constructor(size) {
      this.stack = new Array(size); // Fixed size array banayi
      console.log("line no 42",this.stack);
      
      this.capacity = size;          // Total capacity
      this.topIndex = -1;            // Initially stack khaali hoga
    }
  
    size() {
      return this.topIndex + 1;       // Kitne elements hain
    }
  
    isEmpty() {
      return this.topIndex === -1;    // Agar top -1 hai, toh stack empty hai
    }
  
    top() {
      if (this.isEmpty()) {
        return -1;                   // Stack empty hai toh -1 return karo
      }
      return this.stack[this.topIndex];
    }
  
    push(element) {
      if (this.size() === this.capacity) {
        console.log("Stack Overflow"); // Optional: full hone pe message
        return;
      }
      this.topIndex++;
      this.stack[this.topIndex] = element; // Naya element daal do
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack Underflow"); // Optional: empty hone pe message
        return;
      }
      this.topIndex--; // Sirf index ghata do, element hataane ka kaam nahi (kyunki overwrite ho jayega)
    }
  }
  
  // Main Function
  const stack = new Stack(10);
  
  // Initial state
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Push 5
  stack.push(5);
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Push 6
  stack.push(6);
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Push 7
  stack.push(7);
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Pop
  stack.pop();
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Pop
  stack.pop();
  console.log(stack.top(), stack.isEmpty(), stack.size());
  
  // Pop
  stack.pop();
  console.log(stack.top(), stack.isEmpty(), stack.size());
  


  /*
    class Stack {
Matlab: Ek Stack naam ka class bana rahe hain.
(Classes aise templates hote hain — jaise ek "design" hoti hai kisi object banane ke liye.)


  constructor(size) {
Matlab: Jab new Stack banega, hum uska size denge.
Example: new Stack(10) — iska size 10 hoga.


    this.stack = new Array(size);
Matlab: Ek empty array banaya jisme size number ki jagah reserve kar di.
(Par abhi empty hai.)


    this.capacity = size;
Matlab: capacity variable mein size store kar liya — taaki baad mein check kar sake kitna bhar gaya.


    this.topIndex = -1;
Matlab:
Stack ke top ka index -1 set kiya,
kyunki initially stack khaali hai (koi element nahi hai).

Agar topIndex = -1 hai ➔ Stack empty hai.


  }
Constructor khatam.


  size() {
    return this.topIndex + 1;
  }
Matlab:

Stack mein kitne elements hain?

Top index + 1 se calculate hoga.

Example:

Agar topIndex = 2 ➔ 3 elements hain (indexing 0 se hoti hai).



isEmpty() {
    return this.topIndex === -1;
  }
Matlab:

Stack khaali hai ya nahi check karega.

Agar topIndex -1 hai ➔ return true, nahi to false.


  top() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[this.topIndex];
  }
Matlab:

Stack khaali hai to -1 return kar do.

Nahi to array ke topIndex pe jo value hai, woh return karo.


  push(element) {
Matlab: Naya element stack mein daalna hai.


    if (this.size() === this.capacity) {
      console.log("Stack Overflow");
      return;
    }
Matlab:

Agar stack full ho gaya (size == capacity) ➔ "Stack Overflow" print karo aur kuch mat karo.


    this.topIndex++;
    this.stack[this.topIndex] = element;
  }
Matlab:

Pehle topIndex ko 1 se badha do (upar le jao).

Fir uss jagah pe naya element daal do.


  pop() {
Matlab: Stack se upar ka element hataana hai.


    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }
Matlab:

Agar stack khaali hai ➔ "Stack Underflow" print karo aur kuch mat karo.


    this.topIndex--;
  }
Matlab:

Top element hataane ke liye sirf topIndex ko 1 se kam kar do.

(Array mein value reh jaati hai, par humko farak nahi padta kyunki topIndex decide karta hai.)


}
Stack class ka end.

Ab Main Program:

const stack = new Stack(10);
Matlab:

Ek stack bana rahe hain jiska size 10 hoga.


console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

Stack ka top element kya hai?

Khaali hai ya nahi?

Kitne elements hain?


stack.push(5);
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

5 daala stack mein.

Fir dekha top kya hai, khaali hai ya nahi, size kya hai.


stack.push(6);
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

6 daala.

Fir top, empty status, size print kiya.


stack.push(7);
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

7 daala.

Fir top, empty status, size print kiya.

stack.pop();
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

Ek element (7) hata diya (pop kiya).

Fir top, empty status, size print kiya.


stack.pop();
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

Ek aur element (6) hata diya.

Fir top, empty status, size print kiya.


stack.pop();
console.log(stack.top(), stack.isEmpty(), stack.size());
Matlab:

Ek aur element (5) hata diya.

Stack ab khaali ho gaya.

Fir top, empty status, size print kiya.

⭐ Final Output kya aayega?

Output	Matlab
-1 true 0	Stack khaali hai
5 false 1	5 daala, ab ek item hai
6 false 2	6 daala, ab do items hain
7 false 3	7 daala, ab teen items hain
6 false 2	7 hata diya, ab 6 top hai
5 false 1	6 hata diya, ab 5 top hai
-1 true 0	5 hata diya, ab stack khaali hai
  */