/**
  An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill U, , or a downhill D,  step. Hikes always start and end at sea level, and each step up or down represents a "1" unit change in altitude. We define the following terms:

1. A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

2. A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.


Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example
 steps=8;
 path=[DDUUUUUDD]

 The hiker first enters a valley "2" units deep. Then they climb out and up onto a mountain "2" units high. Finally, the hiker returns to sea level and ends the hike.

 
 Sample Input:
 steps=8;
 path="UDDDUDUU"

 Output=1;



 */


 let steps=8;
 let path="UDDDUDUU";
 let unit=2;
 let valleys=0;
 for(let i=0; i<steps; i++){
    if(path[i]=="U"){
        unit++;
        if(unit==2){
            valleys++
        }
    }
    else if(path[i]=="D"){
        unit--;
    }
 }
 console.log(valleys);
 