
/*Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array
*/


const prompt = require('prompt-sync')({sigint: true});


let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray[userArray.length - 1])
