// 7. Given an array of numbers, write a function to return only the unique values.

let arr =[1,2,3,1,1,4,4,5];
let obj={};
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
}
console.log(obj)