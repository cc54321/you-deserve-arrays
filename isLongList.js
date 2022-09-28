const prompt = require('prompt-sync')({sigint: true});


let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

userarraylength = userArray.length
console.log(userArraylength);

boolean1 = false
boolean2 = true

if(userarraylength > 10){
  console.log(false);
}else if(userArraylength <= 10){
    console.log(true);
}
