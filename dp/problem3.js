// Lucas Numbers

// Lucas numbers are similar to Fibonacci numbers. Lucas numbers are also defined as the sum of its two immediately previous terms. But here the first two terms are 2 and 1 whereas in Fibonacci numbers the first two terms are 0 and 1 respectively. 

// The Lucas numbers are in the following integer sequence:
// 2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123 ..............
// Write a function int lucas(int n) n as an argument and returns the nth Lucas

// Examples : 

// Input : 3
// Output : 4

// Input : 7
// Output : 29 


    // Iterative Javascript program to find n'th Lucas Number
    
    // Iterative function
    function lucas(n)
    {
 
        // declaring base values
        // for positions 0 and 1
        let a = 2, b = 1, c, i;
 
        if (n == 0)
            return a;
 
        // generating number
        for (i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
 
        // return b;
        console.log(b)
    }
    
    let n = 9;
    lucas(n)
 
        