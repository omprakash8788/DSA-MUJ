// 10. Explain and implement a simple closure in JavaScript with an example.

function outer(){
    let x=2;
    function inner(){
        console.log(x)
        return
    }
    inner()
}
console.log(outer())