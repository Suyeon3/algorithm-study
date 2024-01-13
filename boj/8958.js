// ox퀴즈

/* 
그다음 O가 나오면 그 전 점수의 +1을 더한다. 
X가 나오면 다시 0점으로 원위치
*/


// 재귀 사용
let fs = require('fs');
let input = fs.readFileSync('../test.txt').toString().trim().split('\n');
console.log(input)

function cal(arr, idx, score, sum) {   //arr: input, idx: 배열 인덱스, score: 점수
    if (idx === arr.length) {
        return sum;
    }
        
    
    if (arr[idx] === 'O') {
        idx = idx +1;
        score = score +1;
        sum = sum+score;
        return cal(arr, idx, score, sum);
    }
    else if (arr[idx] === 'X') {
        idx = idx +1;
        score = 0;
        sum=sum+score;
        return cal(arr, idx, score, sum);
    }

}


for (let i=1; i<input.length; i++) {

    const answer = cal(input[i], 0, 0, 0);
    console.log(answer);
}


/* 
// 반복문 사용
let fs = require('fs');
let input = fs.readFileSync('../test.txt').toString().trim().split('\n');
const cnt = parseInt(input[0]);

for (let i=1; i<=cnt; i++) {
    
    const arr = input[i].split('');
    let total = 0, score = 0;
    for(let j=0; j<arr.length; j++) {
        if(arr[j] === 'O') {
            score++;
            total = total+score;
        } else { score = 0; }
    }
    console.log(total);

}
*/