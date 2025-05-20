/*
 Given a number n, we need to print its table
 let n= 5
 output :
 5*1=5
 5*2=10
 5*3=15
 5*4=20
 5*5=25
 5*6=30
 5*7=35
 to 
 5*10=50

 */

 function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(n+"*" + i + "=" + n*i)
    }
 }

 let n=5;
 printTable(n)
