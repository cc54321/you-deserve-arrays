/*firstItemIsNumber.js: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number
*/


const prompt = require('prompt-sync')({sigint: true});

let Array = JSON.parse(prompt("Enter an array: "));


console.log(typeof Array[0] === "Number");

