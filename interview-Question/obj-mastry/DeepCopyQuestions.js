// (medium to advanced — structuredClone, JSON.parse(JSON.stringify()), recursion, libraries)

// Q1
const obj1 = { a: 1, b: { c: 2 } };
// Deep copy karke b.c = 10 karo.

// Q2
const arr2 = [ { id: 1 }, { id: 2 } ];
// Deep copy karo aur id=2 update karo.

// Q3
const obj3 = { user: { name: "Om", address: { city: "Delhi" } } };
// Deep copy karo aur city ko "Mumbai" set karo.

// Q4
const arr4 = [ [1, 2], [3, 4] ];
// Deep copy karo aur inner array[0] update karo.

// Q5
const obj5 = { company: { employees: [ { id: 1, role: "Dev" } ] } };
// Deep copy karo aur id=1 ka role "Senior Dev" karo.

// Q6
const arr6 = [ { config: { enabled: true } } ];
// Deep copy karo aur enabled false karo.

// Q7
const obj7 = { cart: { items: [ { id: 1, qty: 2 }, { id: 2, qty: 5 } ] } };
// Deep copy karo aur id=2 ka qty = 50 karo.

// Q8
const arr8 = [ { post: { comments: [ { id: 1, text: "Hi" } ] } } ];
// Deep copy karo aur comment text "Hello" karo.

// Q9
const obj9 = { settings: { theme: { color: "blue" } } };
// Deep copy karo aur color ko "dark" karo.

// Q10
const arr10 = [ { task: { status: "pending" } } ];
// Deep copy karo aur status = "done" karo.

// Q11
const obj11 = { a: [ { b: [1, 2] } ] };
// Deep copy karo aur b me ek aur element push karo.

// Q12
const arr12 = [ { user: { profile: { age: 20 } } } ];
// Deep copy karo aur age ko 25 karo.

// Q13
const obj13 = { project: { details: { tech: ["JS", "React"] } } };
// Deep copy karo aur "React" ko "Next.js" se replace karo.

// Q14
const arr14 = [ { data: { nested: { value: 5 } } } ];
// Deep copy karo aur value = 100 karo.

// Q15
const obj15 = { org: { team: [ { id: 1, role: "Intern" } ] } };
// Deep copy karo aur role ko "Lead" karo.

// Q16
const arr16 = [ { meta: { tags: ["a", "b"] } } ];
// Deep copy karo aur "b" ko remove karo.

// Q17
const obj17 = { library: { books: [ { id: 1, info: { title: "JS" } } ] } };
// Deep copy karo aur title "Advanced JS" karo.

// Q18
const arr18 = [ { group: { members: [ { id: 10, active: true } ] } } ];
// Deep copy karo aur active = false karo.

// Q19
const obj19 = { dept: { manager: { name: "Om", salary: 5000 } } };
// Deep copy karo aur salary double karo.

// Q20
const arr20 = [ { box: { items: [ { key: "A" } ] } } ];
// Deep copy karo aur key ko "B" karo.
