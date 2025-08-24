// Factorials of large numbers

// Given an integer n, find its factorial. Return a list of integers denoting the digits that make up the factorial of n.

// Input: n = 5
// Output: [1, 2, 0]
// Explanation: 5! = 1*2*3*4*5 = 120


// Input: n = 10
// Output: [3, 6, 2, 8, 8, 0, 0]
// Explanation: 10! = 1*2*3*4*5*6*7*8*9*10 = 3628800

 let n=10
     let result = [1]; // Start with 1

    for (let i = 2; i <= n; i++) {
        let carry = 0;

        // Multiply each digit by i (from right to left)
        for (let j = result.length - 1; j >= 0; j--) {
            let mul = result[j] * i + carry;
            result[j] = mul % 10;
            carry = Math.floor(mul / 10);
        }

        // Add leftover carry to the front
        while (carry > 0) {
            result.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }

    // return result;
    console.log(result)