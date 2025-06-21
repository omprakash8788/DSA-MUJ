var x = 0; 
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;  // x=0+1=1, 1+1=2, , 2+1=3 , 3+1=4, 4+1=5 Ans.
    console.log(x); 
  }, 1000);
}

