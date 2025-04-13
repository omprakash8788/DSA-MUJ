/*
Find largest and second largest element in the array
Finding the Largest and Second Largest Elements in an Array
Problem Statement
Write a JavaScript program to find the largest and second largest elements in an array of integers.


*/

function findLargestAndSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    // Finding the largest element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // Finding the second largest element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return { largest, secondLargest: secondLargest === -Infinity ? 'Not Found' : secondLargest };
}

const arr = [10,20,4,45,99];
console.log(findLargestAndSecondLargest(arr));