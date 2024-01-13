// 최소, 최대
// 전개연산자 사용
/*
5
20 10 35 30 7
*/


let fs = require('fs');
let input = fs.readFileSync('../test.txt').toString().trim().split('\n');

inputArr = input[1].split(' ');
inputArr = inputArr.map(Number);

const min = Math.min(...inputArr);
const max = Math.max(...inputArr)

console.log(`${min} ${max}`);