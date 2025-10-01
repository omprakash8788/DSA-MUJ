// Water Bottles

// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.



// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.


// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
// Number of water bottles you can drink: 15 + 3 + 1 = 19.

let  numBottles = 9, numExchange = 3
var numWaterBottles = function(numBottles, numExchange) {
     let totalDrank = numBottles;   // initially drink all
    let empty = numBottles;        // now all are empty

    while (empty >= numExchange) {
        let newBottles = Math.floor(empty / numExchange); // how many we can exchange
        totalDrank += newBottles;   // drink those new bottles
        empty = (empty % numExchange) + newBottles; // leftover empty + new empty
    }

    return totalDrank;
};
console.log(numWaterBottles( numBottles, numExchange))


/*
 numBottles = 9, numExchange = 3
- Drink 9 → total = 9, empty = 9
- Exchange 9/3 = 3 → drink 3 → total = 12, empty = 3
- Exchange 3/3 = 1 → drink 1 → total = 13, empty = 1
- Cannot exchange anymore.
Answer = 13


*/