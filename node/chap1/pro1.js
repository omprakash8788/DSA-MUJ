// const check = function () {
//     console.log("Doing some work...");
//   };
  
// //   check(); // Call the function here
  
//   module.exports = check();


//2.
// const event = {
//   name: 'Birthday Party',
//   guestList: ['Andrew', 'Jen', 'Mike'],
//   printGuestList() {
//   console.log('Guest list for ' + this.name)
 
//   this.guestList.forEach((guest) => {
//   console.log(guest + ' is attending ' + this.name)
//   })
//   }
//  }
//  event.printGuestList()


// 3

  

// const users = [{
//   name: 'Andrew Mead',
//   age: 27
//  },{
//   name: 'George Hudson',
//   age: 72
//  },{
//   name: 'Clay Klay',
//   age: 45
//  }]
//  const user = users.find((user) => user.name === 'George Hudson')
//  console.log(user) // Will print the second object in the array


// Debugs 


// console.log('Starting')
// // Wait 2 seconds before running the function
// setTimeout(() => {
//  console.log('2 Second Timer')
// }, 1000)
// console.log('Stopping')


const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
 }
 const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
 }
 transaction('order', product)
