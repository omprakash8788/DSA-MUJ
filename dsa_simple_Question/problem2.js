/*
 Given an array of size n, the task is to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.

Examples: 

Input: arr[] = [20, 21, 45, 89, 89, 90]
Output: Yes

Input: arr[] = [20, 20, 45, 89, 89, 90]
Output: Yes

Input: arr[] = [20, 20, 78, 98, 99, 97]
Output: No
*/

function arraySortedOrNot(arr, n){
    if(n===0 || n===1){
        return true
    }
    for(let i=0; i<n; i++){
        // unsorted pair found
        if(arr[i-1] > arr[i]){
            return false
        }
    }
    return true
}

const arr = [20, 21, 45, 89, 89, 90];
let n= arr.length;
if(arraySortedOrNot(arr, n)){
    console.log("Yes")
}
else{
    console.log("No")

}