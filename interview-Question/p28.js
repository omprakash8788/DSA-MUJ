// Example of priority in action:

function test1(){
    console.log("1")
}
// test1()
function test2(){
    console.log("2")
}
// test2()
Promise.resolve().then(()=>{
    console.log("3")
})

Promise.resolve().then(()=>{
    console.log("4")
})
console.log("5")

setTimeout(()=>{
 console.log("6")
})
setTimeout(()=>{
 console.log("7")
})
// 1, 2, 5, 3, 4, 6, 7
test1()
test2()