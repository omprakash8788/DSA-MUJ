/*
  Project Idea:
Create your own Undo System using JavaScript.
(Meaning: whatever actions are performed, you should be able to undo them.


Let's first understand it simply:

We'll create a stack that will store all the actions.

When the user clicks Undo, we'll remove the last action from the stack and show the updated result.

We'll use the stack with push and pop operations.


Input (Actions performed by the user):
performAction("Typed 'Hello'")

performAction("Bolded Text")

performAction("Inserted Image")

undoAction()

undoAction()

undoAction()

undoAction()


Expected Output in console:

Performed: Typed 'Hello'
Performed: Bolded Text
Performed: Inserted Image
Undone: Inserted Image
Undone: Bolded Text
Undone: Typed 'Hello'
Nothing to undo!
*/


/*
Pehle simple samjhte hain kaise banega:
Hum ek stack banayenge jo saare kaam ko store karega.

Jab user Undo karega ➔ hum stack se last kaam hata denge aur batayenge.

Stack ka use karenge push aur pop ke through.



*/

// 1. Stack bana rahe hain
let actions = [];

// 2. Kaam karne wala function
function doAction(action) {
  actions.push(action);
  console.log(`Kiya gaya kaam: ${action}`);
}

// 3. Undo karne wala function
function undoAction() {
  if (actions.length === 0) {
    console.log("Koi kaam undo karne ke liye nahi hai!");
  } else {
    let undone = actions.pop();
    console.log(`Undo kiya gaya kaam: ${undone}`);
  }
}

// 4. Dekhne ke liye kya kya kaam kiya
function showActions() {
  console.log("Ab tak kiye gaye kaam:", actions);
}


doAction("Paint kiya");
doAction("Line draw ki");
doAction("Color bhara");

showActions(); 
// Output: Ab tak kiye gaye kaam: [ 'Paint kiya', 'Line draw ki', 'Color bhara' ]

undoAction(); 
// Output: Undo kiya gaya kaam: Color bhara

showActions(); 
// Output: Ab tak kiye gaye kaam: [ 'Paint kiya', 'Line draw ki' ]

undoAction(); 
// Output: Undo kiya gaya kaam: Line draw ki

undoAction(); 
// Output: Undo kiya gaya kaam: Paint kiya

undoAction(); 
// Output: Koi kaam undo karne ke liye nahi hai!
