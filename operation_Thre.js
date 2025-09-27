  
let  nums = [1,3,2,2,5,2,3,7]

    let diff=1;
    let temp=[]
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] - nums[j] == diff){
                temp.push(nums[i], nums[j])
            }
        }
    }
    // return temp;
    console.log(temp)