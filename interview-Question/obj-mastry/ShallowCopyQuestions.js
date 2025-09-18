// Q1
const arr1 = [1, 2, 3];
// Ek shallow copy banao aur index 0 change karo.

// Q2
const obj2 = { a: 1, b: 2 };
// Spread operator se copy banao aur "b" ko 5 karo.

// Q3
const arr3 = [ { id: 1 }, { id: 2 } ];
// Shallow copy banao, phir copy[0].id = 10 karo. Original pe kya hoga?

// Q4
const obj4 = { x: { y: 5 } };
// Spread operator se copy karo aur copy.x.y = 20 set karo. Original me effect?

// Q5
const arr5 = [10, 20, 30];
// slice() use karke shallow copy banao.

// Q6
const arr6 = [ { val: 1 }, { val: 2 } ];
// .concat() se copy banao aur val update karke check karo.

// Q7
const obj7 = { name: "Om", address: { city: "Delhi" } };
// Object.assign() use karke copy banao aur address.city change karo.

// Q8
const arr8 = [1, [2, 3]];
// Spread operator se copy banao aur arr8[1][0] ko change karo. Kya hoga?

// Q9
const obj9 = { a: { b: { c: 1 } } };
// Object.assign() se copy banao aur b.c = 100 karo.

// Q10
const arr10 = ["A", "B", "C"];
// Spread se copy karo aur push "D" karo. Original par kya asar?

// Q11
const obj11 = { u: 1, v: 2 };
// Shallow copy bana ke sirf u ko update karo.

// Q12
const arr12 = [ { a: 1 }, { a: 2 } ];
// Shallow copy karke copy[1].a = 200 karo.

// Q13
const obj13 = { data: [1, 2, 3] };
// Spread se copy karo aur data.push(4) karo.

// Q14
const arr14 = [ [1, 2], [3, 4] ];
// Shallow copy karo aur ek nested array modify karo.

// Q15
const obj15 = { x: 1, y: { z: 2 } };
// Object.assign() se copy karke y.z = 10 karo.

// Q16
const arr16 = [ { n: 1 }, { n: 2 } ];
// Spread copy karke ek object ki property change karo.

// Q17
const obj17 = { id: 1, meta: { active: true } };
// Shallow copy karo aur meta.active ko false karo.

// Q18
const arr18 = [ "JS", ["React", "Node"] ];
// Copy banao aur nested element ko change karo.

// Q19
const obj19 = { profile: { name: "Om" } };
// Spread copy karke profile.name change karo.

// Q20
const arr20 = [1, { deep: "yes" }];
// Shallow copy karke object modify karo.
