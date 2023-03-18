/* 엘리스 토끼가 렌터카를 이용할 시간을 hour 매개변수로 입력 받습니다.
모자장수 렌터카의 시간당 비용을 price 매개변수로 입력
 * 받습니다.
그리고 코더랜드 렌터카의 기본요금, 기본 시간, 기본 시간 이후에 시간당 부과되는 요금을 defaultPrice,
 * defaultHour, defaultCost 등 매개변수로 받습니다.
두 업체의 정보를 토대로 비교하여 최소 비용을 return 하세요.
 */

function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금

    let Hat = H * A; //모자 업체 총 비용
    let Coder = B + (H - C) * D; //코더 업체 추가 및 기본 비용

    // 최소비용을 return 하세요.
    if (Hat >= Coder) {
        return Coder;
    } else if (Hat < Coder) {
        return Hat;
    }
}
console.log(solution(10, 300,1500,6,200,2300));