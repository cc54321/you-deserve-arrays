/*
Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array
*/

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

 console.log(userArray[0]);
