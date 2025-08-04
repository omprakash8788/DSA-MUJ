// Merge deeply nested objects
let obj1 = {
  user: {
    profile: {
      name: "Ajay",
    },
  },
};
let obj2 = {
  user: {
    profile: {
      age: 26,
    },
  },
};
// 👉 Combine both so that result contains name and age under user.profile
// const combine = {user:{...obj1.profile.name, ...obj2.profile.age}}
// Deep merge
let merged = {
  user: {
    profile: {
      ...obj1.user.profile,
      ...obj2.user.profile,
    },
  },
};
console.log(merged);
