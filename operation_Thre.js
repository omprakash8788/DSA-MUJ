let nums = [7, 1, 5, 4];
let temp=[];
    let sum=0
for(let i=1; i<nums.length; i++){

    if(nums[i] > nums[i-1]){
        temp.push(nums[i], nums[i-1])
        sum=nums[i]-nums[i-1]
    }
    
}
console.log(temp, sum)
