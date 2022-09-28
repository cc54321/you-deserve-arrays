const prompt = require('prompt-sync')({sigint: true});


userArray = JSON.parse(prompt('Enter an array: '));

console.log(userArray);

if (userArray.length >= 3){
console.log('the third item in the array is $(userarray [3]). ');
}else {
    console.log('the third item in the array is $(userarray[userArray.length - 1]}');
}
