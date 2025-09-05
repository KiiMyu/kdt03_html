// 기존 방식.
// function Hello(n) {
//     if(n == 1)
//     {
//         alert("안녕하세요");
//     }
//     else
//     {
//         alert('반갑습니다');
//     }

//     console.log("콘솔 출력 테스트입니다.");
// }

// 화살표 함수. -> 변수에 함수를 입력하는 구조.
// 이름 필요없이 함수를 넣은거라 무명함수 라고도 함.
const Hello = (n) => {
    if (n == 1) { /// === 비교 연산자가 있는데, 자동변환 없이 정확하게 확인함. 타입과 변수 전부 확인.
        alert("안녕하세요");
    }
    else {
        alert('반갑습니다');
    }

    console.log("콘솔 출력 테스트입니다.");
}

const CheckVar = () => {
    // x = 10;
    
    //var x ; // 이젠 쓰이지 않는 변수선언. const나 let 을 쓸것.
    let x;
    x = 'test';

    // const y ;
    // y = 20; // 상수는 초기화가 되야되기 때문에 이렇게 실행되지 않음. 초기할당만 가능.
    const y=20;

    // console.log(' x = ' + x);
    console.log(`x = ${x}, y = ${typeof(y)}`); // 또다른 변수 표시 방법 ${} 백틱 문자열 이라고도 함. typeof(y) 식으로 하면 어떤타입인지 알 수 있음.
    console.log(`문자열 test는 숫자인가요? ${isNaN(x) ? '예':'아니오'}`);
    console.log(`문자열 20은 숫자인가요? ${isNaN(y) ? '예':'아니오'}`);
}