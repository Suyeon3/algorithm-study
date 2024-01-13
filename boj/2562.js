// 최댓값

let fs = require('fs');
let input = fs.readFileSync('../test.txt').toString().trim().split('\n');

const arr = [];

for (let i=0; i<input.length; i++) {
    arr.push(parseInt(input[i]));
}

const max = Math.max(...arr);
const index = arr.indexOf(max);

console.log(max);
console.log(index+1);