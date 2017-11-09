let x = [1, 2, 3];
let y = ['blue', 'yellow', 'magical unicorns'];
let z = [1, [], null, 'hello world!'];



x.push(4);
console.log(x);
// => [1, 2, 3, 4]


x.pop();
console.log(x);
// => [1, 2, 3]


console.log(y[1]);
// => 'yellow'



console.log(z.length);
// => 4



if(x.constructor === Array){
    console.log('Yes x is an array!');
}else{
    console.log('No x is not an array!');
};





