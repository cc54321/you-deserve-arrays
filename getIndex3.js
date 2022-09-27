const prompt = require('prompt-sync')({sigint: true});


userArray = JSON.parse(prompt('Enter an array: '));

console.log(userarray);

if (userarray.length >= 3){
console.log('the third item in the array is $(userarray [3]). ');
}else {
    console.log('the third item in the array is $(userarray[userarray.length - 1]}');
}
