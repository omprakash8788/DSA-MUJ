let nums = [1,3,4,8,7,9,3,5,1], k = 2

// Output: [[1,1,3],[3,4,5],[7,8,9]]
nums.sort((a,b)=>(a-b));
// let n=nums.length/3
let three=[]
for(let i=0; i<nums.length; i++){
    if(nums[i] <= k){
        three.push(nums[i])
    }
  
}
console.log(three)