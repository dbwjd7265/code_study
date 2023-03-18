/* str 매개변수에서 문자열을 입력받고 문자열의 앞에서
i번째 문자와 뒤에서 i번째 문자가 같은지 비교한 후 두 문자가 같다면 Same을,
 * 다르다면 Different를 출력합니다.
 */

function solution(str) {
    let arr = str.split('');
    let len = str.length;
    let ans = [];
    for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) {
            ans.push('Different');
        } else {
            ans.push('Same');
        }
        
    }
    return ans.join('\n');
}

console.log(solution('abcdba'));

/*
//정답 출력
Same
Same
Different
*/
