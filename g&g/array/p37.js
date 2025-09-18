let pizzas = [1, 2, 3, 4, 5, 6, 7, 8];
 pizzas.sort((a, b) => a - b); // ascending sort
    let totalGain = 0;
    let n = pizzas.length;

    // We'll use a double-ended approach
    let left = 0;       // small fillers
    let right = n - 1;  // largest pizzas

    let days = n / 4;   // total days

    for (let day = 1; day <= days; day++) {
        if (day % 2 === 1) {
            // odd day → pick the biggest pizza
            totalGain += pizzas[right];
            right--; // we used the biggest
        } else {
            // even day → pick the second biggest pizza
            totalGain += pizzas[right - 1];
            right -= 2; // used two largest for this day (one for gain, one filler)
        }
        left += 2; // consume two smallest as fillers
    }

    // return totalGain;

console.log(totalGain); // 14
// return totalGain;
