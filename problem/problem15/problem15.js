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


Ek utsahi (shaukeen) yatri apne hikes ke record kaafi achhe se rakhta hai. Last hike me jo exactly steps liye gaye the, uske liye har step note kiya gaya tha ki wo ek uphill (upar chadhai) U tha ya downhill (neeche utarai) D. Hikes hamesha sea level se shuru hoti hain aur sea level par hi khatam hoti hain, aur har step upar ya neeche "1" unit ka altitude change represent karta hai. Hum in terms ko define karte hain:

Mountain (Pahaad): Ek sequence jo sea level ke upar hota hai, jo sea level se upar chadhai ke step ke saath shuru hota hai aur sea level par neeche utarne ke step ke saath khatam hota hai.

Valley (Ghaati): Ek sequence jo sea level ke neeche hota hai, jo sea level se neeche utarne ke step ke saath shuru hota hai aur sea level par upar chadhai ke step ke saath khatam hota hai.

Jo path diya gaya hai, uske basis par ghaatiyon (valleys) ki sankhya dhoondh kar print karo.

Example:

steps=8;
path=[DDUUUUUDD]
Yatri pehle ek ghaati me jata hai jo "2" units deep hai. Uske baad wo us ghaati se nikalta hai aur ek pahaad par chadhai karta hai jo "2" units high hai. Finally, yatri sea level par laut aata hai aur hike khatam karta hai.



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
 
