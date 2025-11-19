// 5. Scenario: Convert array of objects into a sum

const orders = [
  { amount: 200 },
  { amount: 100 },
  { amount: 400 }
];

// O/P - 700
let ans = orders.reduce((acc, items)=>acc + items.amount, 0)
console.log(ans)