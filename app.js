"use strict";
/*let myAge = 17 ;

if(myAge >= 18){
  console.log("you are allowed ! ") ;
}
else {
    console.log("you are not allowed ! ") ;
}*/
let month = "Ramadan" && "Water bottle is not allowed";
console.log(month);
let month1 = "Ramadan" || "Water bottle is not allowed";
console.log(month1);
let month2 = false || "Water bottle is not allowed";
console.log(month2);
let tool = "bulb";
let month3 = tool && "UPS";
console.log(month3);
let null1 = "hot water";
let null2 = "cold water";
let null3 = "no water";
let month4 = null1 || (null2 && null3);
//            hot water        true
console.log(month4);
