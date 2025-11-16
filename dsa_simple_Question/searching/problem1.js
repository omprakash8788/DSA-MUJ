/*
 Contains Element?
 Given a sorted array and a number key, return whether the key is present in the array or not.

Expected Time Complexity: O(log n)

Examples
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 2
Answer: true

Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 6
Answer: false


*/

let arr = [1, 2, 3, 3, 3, 4, 4, 5];
let findnumber = 2;
let count=0
for(let i=0; i<arr.length; i++){
    if(arr[i]==findnumber){
       count++
    }
}
if(count >= 1){
    console.log("True")
}
else{
    console.log("False")

}
