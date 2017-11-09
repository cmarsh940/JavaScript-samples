th.floor(Math.random() * 20);
console.log(x);
// => logs random number between 0 and 19
let y = Math.floor(Math.random() * 21);
console.log(y);
// => logs a random number between 0 and 20
let z = Math.floor(Math.random() * 20) + 1;
console.log(z);
// => logs a random number between 1 and 20



let x = 11;
let y = 5;
let z = x % y;
console.log(z);
// => 1


let x = 16;
console.log(x % 2);
// when we modulus by 2, even numbers will return 0
let y = 17;
console.log(y % 2);
// while odd numbers will return a value that isn't 0!
