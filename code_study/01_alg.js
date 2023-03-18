//문제 :  1부터 매개변수 num 까지의 합의 제곱과 제곱의 합의 차이를 출력하세요.

function solution(num) {
    let sum1 = 0; //합의 제곱
    let sum2 = 0; //제곱의 합
    for (let i = 1; i <= num; i++) {
        sum1 += i;
        sum2 += Math.pow(i, 2);
    }
    return Math.pow(sum1, 2) - sum2;
}

console.log(solution(10)); //2640