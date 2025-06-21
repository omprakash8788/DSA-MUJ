const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);  //  Will print: 0 1 2 3 4
  }, 1000);
}

// let is block-scoped, so each iteration gets its own i.

