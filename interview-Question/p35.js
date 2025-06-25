// Add a new skill to the array inside object
let dev = {
  name: "Kiran",
  skills: ["JavaScript", "HTML"],
};

//  Create a new object with "CSS" added to skills, without modifying original.
let newObj = { ...dev, skills: [ ...dev.skills, "CSS" ] };

console.log(newObj);
