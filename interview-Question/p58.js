// Update object inside an array
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

// Update the name of the user with id = 2 to "Janet" immutably.

const updateUser=users.map(item => item.id==2 ? {...item, name:"op"}:item)

console.log(updateUser)