/*
secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
*/




const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("please create an array: "));


if(userArray[2] !== undefined && typeof userArray[2] === 'string'){

let str = userArray[2];

if (str.length >= 2){

    console.log("the second character of the third item, in the array is'")
    + str.substring(1,2) + "'." };

    }
    else{
        console.log("the string has Less than two characters")
    } 


{
    console.log("error")
}

