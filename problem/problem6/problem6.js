/*
 Given an array find the unique items in array.
 let N=5;
 let arr=[1,2,1,2,3]
 Output=3
 */
 let N=5;
 let arr=[1,2,1,2,3];
 let storeuniquekey={};
 for(let i=0; i<N; i++){
    if(storeuniquekey[arr[i]]==undefined){
        storeuniquekey[arr[i]]=1;
    }
    else{
        storeuniquekey[arr[i]]++

    }
 }
//  console.log(storeuniquekey);
for(let key in storeuniquekey){
    if(storeuniquekey[key]==1){
        console.log(key);
        
    }
}
 


