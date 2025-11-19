// 6. Scenario: Convert array to object (grouping)

// Very popular interview question (Flipkart, Amazon)

const people = [
  {name:"A", age:20},
  {name:"B", age:20},
  {name:"C", age:22}
];

const grouped = people.reduce((acc, person) => {
  if(!acc[person.age]) acc[person.age] = [];
  acc[person.age].push(person);
  return acc;
}, {});

console.log(grouped);
