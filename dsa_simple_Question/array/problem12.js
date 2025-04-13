/*
 Even number of digit

 Given an array of integers, find the elements which have an even number of digits.

 Input arr =[42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]

 output : 42, 5775, 34, 45, 3556
*/

function findEvenDigitNumbers(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let count = 0;

        // Count digits manually
        while (num > 0) {
            num = Math.floor(num / 10);
            count++;
        }

        // Check if count is even
        if (count % 2 === 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

const arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];
console.log(findEvenDigitNumbers(arr)); // Output: [42, 5775, 34, 45, 3556]
