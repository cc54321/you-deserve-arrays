/*
isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
*/


const prompt = require('prompt-sync')({sigint: true});


let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

userArray.length = userArray.length
console.log(userArray.length);

boolean1 = false
boolean2 = true

if(userArray.length > 10){
  console.log(true);
}else if(userArray.length <= 10){
    console.log(false);
}


