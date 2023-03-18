/*
마천루의 높이를 input 매개변수로부터 입력받아 아래의 조건을 참고하여 사용자가 입력한 만큼의 높이를 가지는 마천루를 출력하세요.
1~5층은 각각 1, 2, 3, 4, 5개의 *로 구성되어있습니다.
6층부터는 5개의 *로 구성되어있습니다.
 */

function solution(input) {
    const star = '*';
    let arr = [];
    for (let i = 1; i <= input; i++) {
        if (i < 6) {
            arr.push(star.repeat(i));
        } else if (i >= 6) {
            arr.push(star.repeat(5));
        }
    }
    // 출력할 결과를 문자열로 return 하세요.
    return arr.join('\n');
}

console.log(solution(7));