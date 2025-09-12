// 3. Looping
const obj = { a: 1, b: 2, c: 3 };

// for..in
for (let key in obj) console.log(key, obj[key]);

// Object.keys
Object.keys(obj).forEach(k => console.log(k, obj[k]));

// Object.entries
for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
}
